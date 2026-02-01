import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module041Entity } from './module041.model';
import { Module041Loader } from './module041.loader';

@Resolver(() => Module041Entity)
export class Module041Resolver {
  constructor(private readonly loader: Module041Loader) {}

  @Query(() => [Module041Entity], { name: 'module041Items' })
  async getItems(): Promise<Module041Entity[]> {
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
  async computedField(@Parent() item: Module041Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
