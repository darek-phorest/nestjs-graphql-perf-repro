import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module097Entity } from './module097.model';
import { Module097Loader } from './module097.loader';

@Resolver(() => Module097Entity)
export class Module097Resolver {
  constructor(private readonly loader: Module097Loader) {}

  @Query(() => [Module097Entity], { name: 'module097Items' })
  async getItems(): Promise<Module097Entity[]> {
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
  async computedField(@Parent() item: Module097Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
