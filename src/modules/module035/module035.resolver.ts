import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module035Entity } from './module035.model';
import { Module035Loader } from './module035.loader';

@Resolver(() => Module035Entity)
export class Module035Resolver {
  constructor(private readonly loader: Module035Loader) {}

  @Query(() => [Module035Entity], { name: 'module035Items' })
  async getItems(): Promise<Module035Entity[]> {
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
  async computedField(@Parent() item: Module035Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
