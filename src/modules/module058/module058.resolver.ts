import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module058Entity } from './module058.model';
import { Module058Loader } from './module058.loader';

@Resolver(() => Module058Entity)
export class Module058Resolver {
  constructor(private readonly loader: Module058Loader) {}

  @Query(() => [Module058Entity], { name: 'module058Items' })
  async getItems(): Promise<Module058Entity[]> {
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
  async computedField(@Parent() item: Module058Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
