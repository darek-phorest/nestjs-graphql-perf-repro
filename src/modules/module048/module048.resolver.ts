import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module048Entity } from './module048.model';
import { Module048Loader } from './module048.loader';

@Resolver(() => Module048Entity)
export class Module048Resolver {
  constructor(private readonly loader: Module048Loader) {}

  @Query(() => [Module048Entity], { name: 'module048Items' })
  async getItems(): Promise<Module048Entity[]> {
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
  async computedField(@Parent() item: Module048Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
