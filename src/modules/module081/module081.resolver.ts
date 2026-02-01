import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module081Entity } from './module081.model';
import { Module081Loader } from './module081.loader';

@Resolver(() => Module081Entity)
export class Module081Resolver {
  constructor(private readonly loader: Module081Loader) {}

  @Query(() => [Module081Entity], { name: 'module081Items' })
  async getItems(): Promise<Module081Entity[]> {
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
  async computedField(@Parent() item: Module081Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
