import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module016Entity } from './module016.model';
import { Module016Loader } from './module016.loader';

@Resolver(() => Module016Entity)
export class Module016Resolver {
  constructor(private readonly loader: Module016Loader) {}

  @Query(() => [Module016Entity], { name: 'module016Items' })
  async getItems(): Promise<Module016Entity[]> {
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
  async computedField(@Parent() item: Module016Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
