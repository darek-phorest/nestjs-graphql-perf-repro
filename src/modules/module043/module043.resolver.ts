import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module043Entity } from './module043.model';
import { Module043Loader } from './module043.loader';

@Resolver(() => Module043Entity)
export class Module043Resolver {
  constructor(private readonly loader: Module043Loader) {}

  @Query(() => [Module043Entity], { name: 'module043Items' })
  async getItems(): Promise<Module043Entity[]> {
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
  async computedField(@Parent() item: Module043Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
