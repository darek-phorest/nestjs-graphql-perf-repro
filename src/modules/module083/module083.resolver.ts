import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module083Entity } from './module083.model';
import { Module083Loader } from './module083.loader';

@Resolver(() => Module083Entity)
export class Module083Resolver {
  constructor(private readonly loader: Module083Loader) {}

  @Query(() => [Module083Entity], { name: 'module083Items' })
  async getItems(): Promise<Module083Entity[]> {
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
  async computedField(@Parent() item: Module083Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
