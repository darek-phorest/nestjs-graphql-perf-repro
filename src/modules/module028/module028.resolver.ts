import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module028Entity } from './module028.model';
import { Module028Loader } from './module028.loader';

@Resolver(() => Module028Entity)
export class Module028Resolver {
  constructor(private readonly loader: Module028Loader) {}

  @Query(() => [Module028Entity], { name: 'module028Items' })
  async getItems(): Promise<Module028Entity[]> {
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
  async computedField(@Parent() item: Module028Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
