import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module001Entity } from './module001.model';
import { Module001Loader } from './module001.loader';

@Resolver(() => Module001Entity)
export class Module001Resolver {
  constructor(private readonly loader: Module001Loader) {}

  @Query(() => [Module001Entity], { name: 'module001Items' })
  async getItems(): Promise<Module001Entity[]> {
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
  async computedField(@Parent() item: Module001Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
