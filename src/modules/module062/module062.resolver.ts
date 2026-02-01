import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module062Entity } from './module062.model';
import { Module062Loader } from './module062.loader';

@Resolver(() => Module062Entity)
export class Module062Resolver {
  constructor(private readonly loader: Module062Loader) {}

  @Query(() => [Module062Entity], { name: 'module062Items' })
  async getItems(): Promise<Module062Entity[]> {
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
  async computedField(@Parent() item: Module062Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
