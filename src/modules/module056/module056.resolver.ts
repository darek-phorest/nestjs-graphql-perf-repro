import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module056Entity } from './module056.model';
import { Module056Loader } from './module056.loader';

@Resolver(() => Module056Entity)
export class Module056Resolver {
  constructor(private readonly loader: Module056Loader) {}

  @Query(() => [Module056Entity], { name: 'module056Items' })
  async getItems(): Promise<Module056Entity[]> {
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
  async computedField(@Parent() item: Module056Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
