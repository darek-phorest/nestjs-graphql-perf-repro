import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module088Entity } from './module088.model';
import { Module088Loader } from './module088.loader';

@Resolver(() => Module088Entity)
export class Module088Resolver {
  constructor(private readonly loader: Module088Loader) {}

  @Query(() => [Module088Entity], { name: 'module088Items' })
  async getItems(): Promise<Module088Entity[]> {
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
  async computedField(@Parent() item: Module088Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
