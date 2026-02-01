import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module010Entity } from './module010.model';
import { Module010Loader } from './module010.loader';

@Resolver(() => Module010Entity)
export class Module010Resolver {
  constructor(private readonly loader: Module010Loader) {}

  @Query(() => [Module010Entity], { name: 'module010Items' })
  async getItems(): Promise<Module010Entity[]> {
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
  async computedField(@Parent() item: Module010Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
