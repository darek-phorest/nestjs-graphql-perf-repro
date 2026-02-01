import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module064Entity } from './module064.model';
import { Module064Loader } from './module064.loader';

@Resolver(() => Module064Entity)
export class Module064Resolver {
  constructor(private readonly loader: Module064Loader) {}

  @Query(() => [Module064Entity], { name: 'module064Items' })
  async getItems(): Promise<Module064Entity[]> {
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
  async computedField(@Parent() item: Module064Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
