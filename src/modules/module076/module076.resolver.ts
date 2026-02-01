import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module076Entity } from './module076.model';
import { Module076Loader } from './module076.loader';

@Resolver(() => Module076Entity)
export class Module076Resolver {
  constructor(private readonly loader: Module076Loader) {}

  @Query(() => [Module076Entity], { name: 'module076Items' })
  async getItems(): Promise<Module076Entity[]> {
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
  async computedField(@Parent() item: Module076Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
