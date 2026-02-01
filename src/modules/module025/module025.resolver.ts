import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module025Entity } from './module025.model';
import { Module025Loader } from './module025.loader';

@Resolver(() => Module025Entity)
export class Module025Resolver {
  constructor(private readonly loader: Module025Loader) {}

  @Query(() => [Module025Entity], { name: 'module025Items' })
  async getItems(): Promise<Module025Entity[]> {
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
  async computedField(@Parent() item: Module025Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
