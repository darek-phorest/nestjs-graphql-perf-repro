import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module061Entity } from './module061.model';
import { Module061Loader } from './module061.loader';

@Resolver(() => Module061Entity)
export class Module061Resolver {
  constructor(private readonly loader: Module061Loader) {}

  @Query(() => [Module061Entity], { name: 'module061Items' })
  async getItems(): Promise<Module061Entity[]> {
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
  async computedField(@Parent() item: Module061Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
