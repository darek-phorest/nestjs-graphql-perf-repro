import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module059Entity } from './module059.model';
import { Module059Loader } from './module059.loader';

@Resolver(() => Module059Entity)
export class Module059Resolver {
  constructor(private readonly loader: Module059Loader) {}

  @Query(() => [Module059Entity], { name: 'module059Items' })
  async getItems(): Promise<Module059Entity[]> {
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
  async computedField(@Parent() item: Module059Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
