import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module078Entity } from './module078.model';
import { Module078Loader } from './module078.loader';

@Resolver(() => Module078Entity)
export class Module078Resolver {
  constructor(private readonly loader: Module078Loader) {}

  @Query(() => [Module078Entity], { name: 'module078Items' })
  async getItems(): Promise<Module078Entity[]> {
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
  async computedField(@Parent() item: Module078Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
