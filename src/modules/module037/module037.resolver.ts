import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module037Entity } from './module037.model';
import { Module037Loader } from './module037.loader';

@Resolver(() => Module037Entity)
export class Module037Resolver {
  constructor(private readonly loader: Module037Loader) {}

  @Query(() => [Module037Entity], { name: 'module037Items' })
  async getItems(): Promise<Module037Entity[]> {
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
  async computedField(@Parent() item: Module037Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
