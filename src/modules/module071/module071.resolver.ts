import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module071Entity } from './module071.model';
import { Module071Loader } from './module071.loader';

@Resolver(() => Module071Entity)
export class Module071Resolver {
  constructor(private readonly loader: Module071Loader) {}

  @Query(() => [Module071Entity], { name: 'module071Items' })
  async getItems(): Promise<Module071Entity[]> {
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
  async computedField(@Parent() item: Module071Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
