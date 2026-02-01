import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module018Entity } from './module018.model';
import { Module018Loader } from './module018.loader';

@Resolver(() => Module018Entity)
export class Module018Resolver {
  constructor(private readonly loader: Module018Loader) {}

  @Query(() => [Module018Entity], { name: 'module018Items' })
  async getItems(): Promise<Module018Entity[]> {
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
  async computedField(@Parent() item: Module018Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
