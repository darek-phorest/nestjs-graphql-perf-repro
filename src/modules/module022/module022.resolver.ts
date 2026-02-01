import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module022Entity } from './module022.model';
import { Module022Loader } from './module022.loader';

@Resolver(() => Module022Entity)
export class Module022Resolver {
  constructor(private readonly loader: Module022Loader) {}

  @Query(() => [Module022Entity], { name: 'module022Items' })
  async getItems(): Promise<Module022Entity[]> {
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
  async computedField(@Parent() item: Module022Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
