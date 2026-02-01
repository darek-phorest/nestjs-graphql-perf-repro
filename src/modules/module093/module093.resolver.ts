import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module093Entity } from './module093.model';
import { Module093Loader } from './module093.loader';

@Resolver(() => Module093Entity)
export class Module093Resolver {
  constructor(private readonly loader: Module093Loader) {}

  @Query(() => [Module093Entity], { name: 'module093Items' })
  async getItems(): Promise<Module093Entity[]> {
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
  async computedField(@Parent() item: Module093Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
