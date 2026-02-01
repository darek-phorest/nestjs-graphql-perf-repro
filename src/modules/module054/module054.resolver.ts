import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module054Entity } from './module054.model';
import { Module054Loader } from './module054.loader';

@Resolver(() => Module054Entity)
export class Module054Resolver {
  constructor(private readonly loader: Module054Loader) {}

  @Query(() => [Module054Entity], { name: 'module054Items' })
  async getItems(): Promise<Module054Entity[]> {
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
  async computedField(@Parent() item: Module054Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
