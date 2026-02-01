import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module100Entity } from './module100.model';
import { Module100Loader } from './module100.loader';

@Resolver(() => Module100Entity)
export class Module100Resolver {
  constructor(private readonly loader: Module100Loader) {}

  @Query(() => [Module100Entity], { name: 'module100Items' })
  async getItems(): Promise<Module100Entity[]> {
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
  async computedField(@Parent() item: Module100Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
