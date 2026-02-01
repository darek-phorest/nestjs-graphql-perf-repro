import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module026Entity } from './module026.model';
import { Module026Loader } from './module026.loader';

@Resolver(() => Module026Entity)
export class Module026Resolver {
  constructor(private readonly loader: Module026Loader) {}

  @Query(() => [Module026Entity], { name: 'module026Items' })
  async getItems(): Promise<Module026Entity[]> {
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
  async computedField(@Parent() item: Module026Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
