import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module098Entity } from './module098.model';
import { Module098Loader } from './module098.loader';

@Resolver(() => Module098Entity)
export class Module098Resolver {
  constructor(private readonly loader: Module098Loader) {}

  @Query(() => [Module098Entity], { name: 'module098Items' })
  async getItems(): Promise<Module098Entity[]> {
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
  async computedField(@Parent() item: Module098Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
