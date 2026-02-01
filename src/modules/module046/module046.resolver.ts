import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module046Entity } from './module046.model';
import { Module046Loader } from './module046.loader';

@Resolver(() => Module046Entity)
export class Module046Resolver {
  constructor(private readonly loader: Module046Loader) {}

  @Query(() => [Module046Entity], { name: 'module046Items' })
  async getItems(): Promise<Module046Entity[]> {
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
  async computedField(@Parent() item: Module046Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
