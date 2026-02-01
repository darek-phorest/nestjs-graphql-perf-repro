import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module063Entity } from './module063.model';
import { Module063Loader } from './module063.loader';

@Resolver(() => Module063Entity)
export class Module063Resolver {
  constructor(private readonly loader: Module063Loader) {}

  @Query(() => [Module063Entity], { name: 'module063Items' })
  async getItems(): Promise<Module063Entity[]> {
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
  async computedField(@Parent() item: Module063Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
