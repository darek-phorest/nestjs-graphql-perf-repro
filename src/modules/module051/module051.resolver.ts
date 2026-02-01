import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module051Entity } from './module051.model';
import { Module051Loader } from './module051.loader';

@Resolver(() => Module051Entity)
export class Module051Resolver {
  constructor(private readonly loader: Module051Loader) {}

  @Query(() => [Module051Entity], { name: 'module051Items' })
  async getItems(): Promise<Module051Entity[]> {
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
  async computedField(@Parent() item: Module051Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
