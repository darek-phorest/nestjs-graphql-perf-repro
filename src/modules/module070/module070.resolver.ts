import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module070Entity } from './module070.model';
import { Module070Loader } from './module070.loader';

@Resolver(() => Module070Entity)
export class Module070Resolver {
  constructor(private readonly loader: Module070Loader) {}

  @Query(() => [Module070Entity], { name: 'module070Items' })
  async getItems(): Promise<Module070Entity[]> {
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
  async computedField(@Parent() item: Module070Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
