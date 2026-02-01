import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module045Entity } from './module045.model';
import { Module045Loader } from './module045.loader';

@Resolver(() => Module045Entity)
export class Module045Resolver {
  constructor(private readonly loader: Module045Loader) {}

  @Query(() => [Module045Entity], { name: 'module045Items' })
  async getItems(): Promise<Module045Entity[]> {
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
  async computedField(@Parent() item: Module045Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
