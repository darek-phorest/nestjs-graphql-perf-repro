import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module014Entity } from './module014.model';
import { Module014Loader } from './module014.loader';

@Resolver(() => Module014Entity)
export class Module014Resolver {
  constructor(private readonly loader: Module014Loader) {}

  @Query(() => [Module014Entity], { name: 'module014Items' })
  async getItems(): Promise<Module014Entity[]> {
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
  async computedField(@Parent() item: Module014Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
