import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module075Entity } from './module075.model';
import { Module075Loader } from './module075.loader';

@Resolver(() => Module075Entity)
export class Module075Resolver {
  constructor(private readonly loader: Module075Loader) {}

  @Query(() => [Module075Entity], { name: 'module075Items' })
  async getItems(): Promise<Module075Entity[]> {
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
  async computedField(@Parent() item: Module075Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
