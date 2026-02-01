import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

// Apply patch after imports but before bootstrap
import { REQUEST, ModulesContainer } from '@nestjs/core';
import { Module } from '@nestjs/core/injector/module';
import { InternalCoreModule } from '@nestjs/core/injector/internal-core-module';

// Dynamically import and patch
const patchResolversExplorer = async () => {
  const { ResolversExplorerService } = await import('@nestjs/graphql/dist/services/resolvers-explorer.service');

  const coreModuleCache = new WeakMap<typeof ResolversExplorerService.prototype, Module | null>();

  const getCoreModuleRef = (instance: any): Module | null => {
    if (coreModuleCache.has(instance)) {
      return coreModuleCache.get(instance)!;
    }

    const modulesContainer = instance.modulesContainer as ModulesContainer;

    for (const [, moduleRef] of modulesContainer) {
      if (moduleRef.metatype?.name === InternalCoreModule.name) {
        coreModuleCache.set(instance, moduleRef);
        return moduleRef;
      }
    }

    coreModuleCache.set(instance, null);
    return null;
  };

  (ResolversExplorerService.prototype as any).registerContextProvider =
    function (request: unknown, contextId: any): void {
      const coreModuleRef = getCoreModuleRef(this);
      if (!coreModuleRef) {
        return;
      }

      const wrapper = coreModuleRef.getProviderByKey(REQUEST);
      wrapper.setInstanceByContextId(contextId, {
        instance: contextId.getParent ? contextId.payload : request,
        isResolved: true,
      });
    };

  console.log('[PATCH] registerContextProvider has been patched for caching');
};

async function bootstrap() {
  // Apply patch before creating app
  await patchResolversExplorer();

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');

  console.log(`\nApplication running on http://localhost:${port}/graphql`);
  console.log(`GraphQL Playground: http://localhost:${port}/graphiql`);
  console.log(`\nFix applied: YES (cached InternalCoreModule lookup)`);
}

bootstrap();