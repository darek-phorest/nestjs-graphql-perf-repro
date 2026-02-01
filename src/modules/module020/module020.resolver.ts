import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module020Entity } from './module020.model';
import { Module020Loader } from './module020.loader';

@Resolver(() => Module020Entity)
export class Module020Resolver {
  constructor(private readonly loader: Module020Loader) {}

  @Query(() => [Module020Entity], { name: 'module020Items' })
  async getItems(): Promise<Module020Entity[]> {
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
  async computedField(@Parent() item: Module020Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
