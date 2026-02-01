import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module057Entity } from './module057.model';
import { Module057Loader } from './module057.loader';

@Resolver(() => Module057Entity)
export class Module057Resolver {
  constructor(private readonly loader: Module057Loader) {}

  @Query(() => [Module057Entity], { name: 'module057Items' })
  async getItems(): Promise<Module057Entity[]> {
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
  async computedField(@Parent() item: Module057Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
