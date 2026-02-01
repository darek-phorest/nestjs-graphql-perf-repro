import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module047Entity } from './module047.model';
import { Module047Loader } from './module047.loader';

@Resolver(() => Module047Entity)
export class Module047Resolver {
  constructor(private readonly loader: Module047Loader) {}

  @Query(() => [Module047Entity], { name: 'module047Items' })
  async getItems(): Promise<Module047Entity[]> {
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
  async computedField(@Parent() item: Module047Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
