import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module050Entity } from './module050.model';
import { Module050Loader } from './module050.loader';

@Resolver(() => Module050Entity)
export class Module050Resolver {
  constructor(private readonly loader: Module050Loader) {}

  @Query(() => [Module050Entity], { name: 'module050Items' })
  async getItems(): Promise<Module050Entity[]> {
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
  async computedField(@Parent() item: Module050Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
