import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module060Entity } from './module060.model';
import { Module060Loader } from './module060.loader';

@Resolver(() => Module060Entity)
export class Module060Resolver {
  constructor(private readonly loader: Module060Loader) {}

  @Query(() => [Module060Entity], { name: 'module060Items' })
  async getItems(): Promise<Module060Entity[]> {
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
  async computedField(@Parent() item: Module060Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
