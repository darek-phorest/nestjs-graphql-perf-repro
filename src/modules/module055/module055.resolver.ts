import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module055Entity } from './module055.model';
import { Module055Loader } from './module055.loader';

@Resolver(() => Module055Entity)
export class Module055Resolver {
  constructor(private readonly loader: Module055Loader) {}

  @Query(() => [Module055Entity], { name: 'module055Items' })
  async getItems(): Promise<Module055Entity[]> {
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
  async computedField(@Parent() item: Module055Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
