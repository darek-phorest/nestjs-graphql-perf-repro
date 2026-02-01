import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module019Entity } from './module019.model';
import { Module019Loader } from './module019.loader';

@Resolver(() => Module019Entity)
export class Module019Resolver {
  constructor(private readonly loader: Module019Loader) {}

  @Query(() => [Module019Entity], { name: 'module019Items' })
  async getItems(): Promise<Module019Entity[]> {
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
  async computedField(@Parent() item: Module019Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
