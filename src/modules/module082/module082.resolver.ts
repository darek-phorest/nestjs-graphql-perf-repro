import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module082Entity } from './module082.model';
import { Module082Loader } from './module082.loader';

@Resolver(() => Module082Entity)
export class Module082Resolver {
  constructor(private readonly loader: Module082Loader) {}

  @Query(() => [Module082Entity], { name: 'module082Items' })
  async getItems(): Promise<Module082Entity[]> {
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
  async computedField(@Parent() item: Module082Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
