import { REQUEST, ModulesContainer } from '@nestjs/core';
import { Module } from '@nestjs/core/injector/module';
import { InternalCoreModule } from '@nestjs/core/injector/internal-core-module';
import { ResolversExplorerService } from '@nestjs/graphql/dist/services/resolvers-explorer.service';

/**
 * Patches the ResolversExplorerService.prototype.registerContextProvider method
 * to cache the InternalCoreModule lookup instead of iterating through all modules
 * on every request-scoped resolver call.
 *
 * This improves performance when there are many modules (e.g., 100+) in the application.
 */
export function patchResolversExplorerService(): void {
  // Store the cached module ref in a WeakMap keyed by the service instance
  const coreModuleCache = new WeakMap<
    ResolversExplorerService,
    Module | null
  >();

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

  // Patch the prototype method
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
}

// Apply the patch immediately when this module is imported
patchResolversExplorerService();