import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module021Entity } from './module021.model';
import { Module021Loader } from './module021.loader';

@Resolver(() => Module021Entity)
export class Module021Resolver {
  constructor(private readonly loader: Module021Loader) {}

  @Query(() => [Module021Entity], { name: 'module021Items' })
  async getItems(): Promise<Module021Entity[]> {
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
  async computedField(@Parent() item: Module021Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
