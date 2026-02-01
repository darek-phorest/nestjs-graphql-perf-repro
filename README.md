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

## Quick Start

```bash
# Install dependencies
npm install

# Build
npm run build

# Run benchmark comparison (tests both with and without fix)
npm run benchmark:compare
```

## Benchmark Results (100 modules)

```
| Metric | Without Fix | With Fix | Improvement |
|--------|-------------|----------|-------------|
| Avg    | 2.6ms       | 2.1ms    | -19.8%      |
| P50    | 2.6ms       | 2.0ms    | -22.9%      |
| P90    | 3.2ms       | 2.7ms    | -16.8%      |
```

**Note:** The improvement scales with module count. In a production application with 180+ modules, we observed:

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Avg Response Time | 804ms | 477ms | **-40.7%** |
| Throughput | 1.24 req/s | 2.09 req/s | **+68.5%** |

## Manual Testing

```bash
# Start WITHOUT fix (original behavior)
npm run start:without-fix

# Start WITH fix (cached lookup)
npm run start:with-fix

# Run benchmark against running server
npm run benchmark
```

## Profiling

To see `registerContextProvider` in a CPU profile:

```bash
npm run start:debug
# Open chrome://inspect, record CPU profile while running benchmark
# Look for registerContextProvider in the flame chart
```

## The Fix

The fix caches the `InternalCoreModule` reference after the first lookup. See `src/main-with-fix.ts` for the implementation:

```typescript
const coreModuleCache = new WeakMap();

const getCoreModuleRef = (instance) => {
  if (coreModuleCache.has(instance)) {
    return coreModuleCache.get(instance);
  }
  // ... find and cache the module
};
```

## Repository Structure

- **100 modules** - Each with a request-scoped DataLoader
- **`src/main.ts`** - Original behavior (no fix)
- **`src/main-with-fix.ts`** - With cached lookup fix
- **`benchmark/compare.js`** - Automated comparison script

## Environment

- `@nestjs/graphql`: 12.2.1
- `@nestjs/mercurius`: 12.2.2
- `@nestjs/core`: 10.4.15
- `mercurius`: 14.1.0
- Node.js: 20.x