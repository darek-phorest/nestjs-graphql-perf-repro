import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module038Entity } from './module038.model';
import { Module038Loader } from './module038.loader';

@Resolver(() => Module038Entity)
export class Module038Resolver {
  constructor(private readonly loader: Module038Loader) {}

  @Query(() => [Module038Entity], { name: 'module038Items' })
  async getItems(): Promise<Module038Entity[]> {
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
  async computedField(@Parent() item: Module038Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
