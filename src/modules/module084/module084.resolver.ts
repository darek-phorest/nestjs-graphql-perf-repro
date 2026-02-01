import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module084Entity } from './module084.model';
import { Module084Loader } from './module084.loader';

@Resolver(() => Module084Entity)
export class Module084Resolver {
  constructor(private readonly loader: Module084Loader) {}

  @Query(() => [Module084Entity], { name: 'module084Items' })
  async getItems(): Promise<Module084Entity[]> {
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
  async computedField(@Parent() item: Module084Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
