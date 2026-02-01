import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module091Entity } from './module091.model';
import { Module091Loader } from './module091.loader';

@Resolver(() => Module091Entity)
export class Module091Resolver {
  constructor(private readonly loader: Module091Loader) {}

  @Query(() => [Module091Entity], { name: 'module091Items' })
  async getItems(): Promise<Module091Entity[]> {
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
  async computedField(@Parent() item: Module091Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
