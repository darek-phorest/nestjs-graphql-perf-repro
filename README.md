# NestJS GraphQL Performance Issue Reproduction

This repository demonstrates a performance issue in `@nestjs/graphql` where the `registerContextProvider` method iterates through **all modules** on every request-scoped resolver call to find `InternalCoreModule`.

## The Problem

In [`ResolversExplorerService.registerContextProvider`](https://github.com/nestjs/graphql/blob/master/packages/graphql/lib/services/resolvers-explorer.service.ts#L300-L312):

```typescript
private registerContextProvider<T = any>(request: T, contextId: ContextId) {
  const coreModuleArray = [...this.modulesContainer.entries()]
    .filter(
      ([key, { metatype }]) =>
        metatype && metatype.name === InternalCoreModule.name,
    )
    .map(([key, value]) => value);
  // ...
}
```

This method is called for **every request-scoped resolver** (like DataLoaders), and it iterates through all modules each time. With 100 modules and 100 resolver calls per request, this results in 10,000+ iterations per request.

## Repository Structure

- **100 modules** - Each module has:
  - A GraphQL resolver
  - A request-scoped DataLoader
  - A model with a `computedField` that triggers the DataLoader

## Steps to Reproduce

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Generate the 100 modules**:
   ```bash
   npm run generate-modules
   ```

3. **Start the server**:
   ```bash
   npm run build && npm start
   ```

4. **Run the benchmark**:
   ```bash
   npm run benchmark
   ```

5. **Profile with Chrome DevTools**:
   ```bash
   node --inspect dist/main.js
   ```
   - Open `chrome://inspect`
   - Click "inspect" on the Node.js target
   - Go to "Performance" tab
   - Click "Record" and run the benchmark
   - Stop recording and analyze the flame chart
   - Look for `registerContextProvider` - it will be a significant portion of CPU time

## Expected Behavior

The `InternalCoreModule` lookup should be cached after the first call, reducing complexity from O(n) to O(1).

## Suggested Fix

```typescript
private coreModuleRef: Module | null | undefined;

private registerContextProvider<T = any>(request: T, contextId: ContextId) {
  if (this.coreModuleRef === undefined) {
    const entry = [...this.modulesContainer.entries()]
      .find(([, { metatype }]) => metatype?.name === InternalCoreModule.name);
    this.coreModuleRef = entry?.[1] ?? null;
  }

  if (!this.coreModuleRef) {
    return;
  }

  const wrapper = this.coreModuleRef.getProviderByKey(REQUEST);
  wrapper.setInstanceByContextId(contextId, {
    instance: contextId.getParent ? contextId.payload : request,
    isResolved: true,
  });
}
```

## Real-World Impact

In a production application with 180+ modules, applying this fix resulted in:

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Avg Response Time | 804ms | 477ms | **-40.7%** |
| Throughput | 1.24 req/s | 2.09 req/s | **+68.5%** |

Profiling showed `registerContextProvider` consuming **37.8% of CPU time** before the fix.

## Environment

- `@nestjs/graphql`: 12.2.1
- `@nestjs/core`: 10.4.15
- `graphql`: 16.9.0
- `@apollo/server`: 4.11.0
- Node.js: 20.x