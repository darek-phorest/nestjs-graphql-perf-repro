import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module090Entity } from './module090.model';
import { Module090Loader } from './module090.loader';

@Resolver(() => Module090Entity)
export class Module090Resolver {
  constructor(private readonly loader: Module090Loader) {}

  @Query(() => [Module090Entity], { name: 'module090Items' })
  async getItems(): Promise<Module090Entity[]> {
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
  async computedField(@Parent() item: Module090Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
