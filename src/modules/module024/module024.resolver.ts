import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module024Entity } from './module024.model';
import { Module024Loader } from './module024.loader';

@Resolver(() => Module024Entity)
export class Module024Resolver {
  constructor(private readonly loader: Module024Loader) {}

  @Query(() => [Module024Entity], { name: 'module024Items' })
  async getItems(): Promise<Module024Entity[]> {
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
  async computedField(@Parent() item: Module024Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
