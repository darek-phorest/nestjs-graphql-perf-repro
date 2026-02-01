import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module013Entity } from './module013.model';
import { Module013Loader } from './module013.loader';

@Resolver(() => Module013Entity)
export class Module013Resolver {
  constructor(private readonly loader: Module013Loader) {}

  @Query(() => [Module013Entity], { name: 'module013Items' })
  async getItems(): Promise<Module013Entity[]> {
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
  async computedField(@Parent() item: Module013Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
