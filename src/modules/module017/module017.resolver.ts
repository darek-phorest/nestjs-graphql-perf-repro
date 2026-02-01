import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module017Entity } from './module017.model';
import { Module017Loader } from './module017.loader';

@Resolver(() => Module017Entity)
export class Module017Resolver {
  constructor(private readonly loader: Module017Loader) {}

  @Query(() => [Module017Entity], { name: 'module017Items' })
  async getItems(): Promise<Module017Entity[]> {
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
  async computedField(@Parent() item: Module017Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
