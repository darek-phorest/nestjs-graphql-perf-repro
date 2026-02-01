import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module079Entity } from './module079.model';
import { Module079Loader } from './module079.loader';

@Resolver(() => Module079Entity)
export class Module079Resolver {
  constructor(private readonly loader: Module079Loader) {}

  @Query(() => [Module079Entity], { name: 'module079Items' })
  async getItems(): Promise<Module079Entity[]> {
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
  async computedField(@Parent() item: Module079Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
