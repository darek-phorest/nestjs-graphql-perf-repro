import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module003Entity } from './module003.model';
import { Module003Loader } from './module003.loader';

@Resolver(() => Module003Entity)
export class Module003Resolver {
  constructor(private readonly loader: Module003Loader) {}

  @Query(() => [Module003Entity], { name: 'module003Items' })
  async getItems(): Promise<Module003Entity[]> {
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
  async computedField(@Parent() item: Module003Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
