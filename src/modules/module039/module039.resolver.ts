import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module039Entity } from './module039.model';
import { Module039Loader } from './module039.loader';

@Resolver(() => Module039Entity)
export class Module039Resolver {
  constructor(private readonly loader: Module039Loader) {}

  @Query(() => [Module039Entity], { name: 'module039Items' })
  async getItems(): Promise<Module039Entity[]> {
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
  async computedField(@Parent() item: Module039Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
