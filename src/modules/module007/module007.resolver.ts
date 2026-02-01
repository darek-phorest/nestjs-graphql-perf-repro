import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module007Entity } from './module007.model';
import { Module007Loader } from './module007.loader';

@Resolver(() => Module007Entity)
export class Module007Resolver {
  constructor(private readonly loader: Module007Loader) {}

  @Query(() => [Module007Entity], { name: 'module007Items' })
  async getItems(): Promise<Module007Entity[]> {
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
  async computedField(@Parent() item: Module007Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
