import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module089Entity } from './module089.model';
import { Module089Loader } from './module089.loader';

@Resolver(() => Module089Entity)
export class Module089Resolver {
  constructor(private readonly loader: Module089Loader) {}

  @Query(() => [Module089Entity], { name: 'module089Items' })
  async getItems(): Promise<Module089Entity[]> {
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
  async computedField(@Parent() item: Module089Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
