import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module072Entity } from './module072.model';
import { Module072Loader } from './module072.loader';

@Resolver(() => Module072Entity)
export class Module072Resolver {
  constructor(private readonly loader: Module072Loader) {}

  @Query(() => [Module072Entity], { name: 'module072Items' })
  async getItems(): Promise<Module072Entity[]> {
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
  async computedField(@Parent() item: Module072Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
