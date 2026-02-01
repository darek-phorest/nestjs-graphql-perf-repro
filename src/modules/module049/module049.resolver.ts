import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module049Entity } from './module049.model';
import { Module049Loader } from './module049.loader';

@Resolver(() => Module049Entity)
export class Module049Resolver {
  constructor(private readonly loader: Module049Loader) {}

  @Query(() => [Module049Entity], { name: 'module049Items' })
  async getItems(): Promise<Module049Entity[]> {
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
  async computedField(@Parent() item: Module049Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
