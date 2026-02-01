import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module066Entity } from './module066.model';
import { Module066Loader } from './module066.loader';

@Resolver(() => Module066Entity)
export class Module066Resolver {
  constructor(private readonly loader: Module066Loader) {}

  @Query(() => [Module066Entity], { name: 'module066Items' })
  async getItems(): Promise<Module066Entity[]> {
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
  async computedField(@Parent() item: Module066Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
