import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module065Entity } from './module065.model';
import { Module065Loader } from './module065.loader';

@Resolver(() => Module065Entity)
export class Module065Resolver {
  constructor(private readonly loader: Module065Loader) {}

  @Query(() => [Module065Entity], { name: 'module065Items' })
  async getItems(): Promise<Module065Entity[]> {
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
  async computedField(@Parent() item: Module065Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
