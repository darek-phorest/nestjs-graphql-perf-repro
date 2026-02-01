import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module042Entity } from './module042.model';
import { Module042Loader } from './module042.loader';

@Resolver(() => Module042Entity)
export class Module042Resolver {
  constructor(private readonly loader: Module042Loader) {}

  @Query(() => [Module042Entity], { name: 'module042Items' })
  async getItems(): Promise<Module042Entity[]> {
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
  async computedField(@Parent() item: Module042Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
