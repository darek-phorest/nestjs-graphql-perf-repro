import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module099Entity } from './module099.model';
import { Module099Loader } from './module099.loader';

@Resolver(() => Module099Entity)
export class Module099Resolver {
  constructor(private readonly loader: Module099Loader) {}

  @Query(() => [Module099Entity], { name: 'module099Items' })
  async getItems(): Promise<Module099Entity[]> {
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
  async computedField(@Parent() item: Module099Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
