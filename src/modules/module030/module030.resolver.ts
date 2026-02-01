import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module030Entity } from './module030.model';
import { Module030Loader } from './module030.loader';

@Resolver(() => Module030Entity)
export class Module030Resolver {
  constructor(private readonly loader: Module030Loader) {}

  @Query(() => [Module030Entity], { name: 'module030Items' })
  async getItems(): Promise<Module030Entity[]> {
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
  async computedField(@Parent() item: Module030Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
