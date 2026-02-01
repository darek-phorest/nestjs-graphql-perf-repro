import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module067Entity } from './module067.model';
import { Module067Loader } from './module067.loader';

@Resolver(() => Module067Entity)
export class Module067Resolver {
  constructor(private readonly loader: Module067Loader) {}

  @Query(() => [Module067Entity], { name: 'module067Items' })
  async getItems(): Promise<Module067Entity[]> {
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
  async computedField(@Parent() item: Module067Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
