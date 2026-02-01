import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module069Entity } from './module069.model';
import { Module069Loader } from './module069.loader';

@Resolver(() => Module069Entity)
export class Module069Resolver {
  constructor(private readonly loader: Module069Loader) {}

  @Query(() => [Module069Entity], { name: 'module069Items' })
  async getItems(): Promise<Module069Entity[]> {
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
  async computedField(@Parent() item: Module069Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
