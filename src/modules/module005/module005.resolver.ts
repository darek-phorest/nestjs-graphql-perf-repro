import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module005Entity } from './module005.model';
import { Module005Loader } from './module005.loader';

@Resolver(() => Module005Entity)
export class Module005Resolver {
  constructor(private readonly loader: Module005Loader) {}

  @Query(() => [Module005Entity], { name: 'module005Items' })
  async getItems(): Promise<Module005Entity[]> {
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
  async computedField(@Parent() item: Module005Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
