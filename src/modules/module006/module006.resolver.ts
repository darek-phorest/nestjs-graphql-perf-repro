import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module006Entity } from './module006.model';
import { Module006Loader } from './module006.loader';

@Resolver(() => Module006Entity)
export class Module006Resolver {
  constructor(private readonly loader: Module006Loader) {}

  @Query(() => [Module006Entity], { name: 'module006Items' })
  async getItems(): Promise<Module006Entity[]> {
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
  async computedField(@Parent() item: Module006Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
