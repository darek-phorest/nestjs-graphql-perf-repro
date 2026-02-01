import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module068Entity } from './module068.model';
import { Module068Loader } from './module068.loader';

@Resolver(() => Module068Entity)
export class Module068Resolver {
  constructor(private readonly loader: Module068Loader) {}

  @Query(() => [Module068Entity], { name: 'module068Items' })
  async getItems(): Promise<Module068Entity[]> {
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
  async computedField(@Parent() item: Module068Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
