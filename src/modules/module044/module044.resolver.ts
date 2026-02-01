import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module044Entity } from './module044.model';
import { Module044Loader } from './module044.loader';

@Resolver(() => Module044Entity)
export class Module044Resolver {
  constructor(private readonly loader: Module044Loader) {}

  @Query(() => [Module044Entity], { name: 'module044Items' })
  async getItems(): Promise<Module044Entity[]> {
    // Return 5 items to trigger multiple resolver calls
    return [
      { id: '1', name: 'Item 1' },
      { id: '2', name: 'Item 2' },
      { id: '3', name: 'Item 3' },
      { id: '4', name: 'Item 4' },
      { id: '5', name: 'Item 5' },
    ];
  }

  @ResolveField(() => String, { nullable: true })
  async computedField(@Parent() item: Module044Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
