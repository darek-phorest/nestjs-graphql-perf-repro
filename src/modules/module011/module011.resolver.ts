import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module011Entity } from './module011.model';
import { Module011Loader } from './module011.loader';

@Resolver(() => Module011Entity)
export class Module011Resolver {
  constructor(private readonly loader: Module011Loader) {}

  @Query(() => [Module011Entity], { name: 'module011Items' })
  async getItems(): Promise<Module011Entity[]> {
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
  async computedField(@Parent() item: Module011Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
