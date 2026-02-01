import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module033Entity } from './module033.model';
import { Module033Loader } from './module033.loader';

@Resolver(() => Module033Entity)
export class Module033Resolver {
  constructor(private readonly loader: Module033Loader) {}

  @Query(() => [Module033Entity], { name: 'module033Items' })
  async getItems(): Promise<Module033Entity[]> {
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
  async computedField(@Parent() item: Module033Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
