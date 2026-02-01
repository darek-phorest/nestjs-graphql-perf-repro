import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module027Entity } from './module027.model';
import { Module027Loader } from './module027.loader';

@Resolver(() => Module027Entity)
export class Module027Resolver {
  constructor(private readonly loader: Module027Loader) {}

  @Query(() => [Module027Entity], { name: 'module027Items' })
  async getItems(): Promise<Module027Entity[]> {
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
  async computedField(@Parent() item: Module027Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
