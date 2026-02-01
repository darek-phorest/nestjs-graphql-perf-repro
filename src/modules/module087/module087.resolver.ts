import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module087Entity } from './module087.model';
import { Module087Loader } from './module087.loader';

@Resolver(() => Module087Entity)
export class Module087Resolver {
  constructor(private readonly loader: Module087Loader) {}

  @Query(() => [Module087Entity], { name: 'module087Items' })
  async getItems(): Promise<Module087Entity[]> {
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
  async computedField(@Parent() item: Module087Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
