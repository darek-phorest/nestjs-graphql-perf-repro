import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module092Entity } from './module092.model';
import { Module092Loader } from './module092.loader';

@Resolver(() => Module092Entity)
export class Module092Resolver {
  constructor(private readonly loader: Module092Loader) {}

  @Query(() => [Module092Entity], { name: 'module092Items' })
  async getItems(): Promise<Module092Entity[]> {
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
  async computedField(@Parent() item: Module092Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
