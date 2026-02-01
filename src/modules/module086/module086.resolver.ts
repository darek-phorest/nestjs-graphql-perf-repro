import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module086Entity } from './module086.model';
import { Module086Loader } from './module086.loader';

@Resolver(() => Module086Entity)
export class Module086Resolver {
  constructor(private readonly loader: Module086Loader) {}

  @Query(() => [Module086Entity], { name: 'module086Items' })
  async getItems(): Promise<Module086Entity[]> {
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
  async computedField(@Parent() item: Module086Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
