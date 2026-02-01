import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module002Entity } from './module002.model';
import { Module002Loader } from './module002.loader';

@Resolver(() => Module002Entity)
export class Module002Resolver {
  constructor(private readonly loader: Module002Loader) {}

  @Query(() => [Module002Entity], { name: 'module002Items' })
  async getItems(): Promise<Module002Entity[]> {
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
  async computedField(@Parent() item: Module002Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
