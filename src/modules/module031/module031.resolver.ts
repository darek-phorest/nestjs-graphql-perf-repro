import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module031Entity } from './module031.model';
import { Module031Loader } from './module031.loader';

@Resolver(() => Module031Entity)
export class Module031Resolver {
  constructor(private readonly loader: Module031Loader) {}

  @Query(() => [Module031Entity], { name: 'module031Items' })
  async getItems(): Promise<Module031Entity[]> {
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
  async computedField(@Parent() item: Module031Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
