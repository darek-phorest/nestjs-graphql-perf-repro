import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module095Entity } from './module095.model';
import { Module095Loader } from './module095.loader';

@Resolver(() => Module095Entity)
export class Module095Resolver {
  constructor(private readonly loader: Module095Loader) {}

  @Query(() => [Module095Entity], { name: 'module095Items' })
  async getItems(): Promise<Module095Entity[]> {
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
  async computedField(@Parent() item: Module095Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
