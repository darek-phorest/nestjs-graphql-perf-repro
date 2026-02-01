import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module032Entity } from './module032.model';
import { Module032Loader } from './module032.loader';

@Resolver(() => Module032Entity)
export class Module032Resolver {
  constructor(private readonly loader: Module032Loader) {}

  @Query(() => [Module032Entity], { name: 'module032Items' })
  async getItems(): Promise<Module032Entity[]> {
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
  async computedField(@Parent() item: Module032Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
