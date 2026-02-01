import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module053Entity } from './module053.model';
import { Module053Loader } from './module053.loader';

@Resolver(() => Module053Entity)
export class Module053Resolver {
  constructor(private readonly loader: Module053Loader) {}

  @Query(() => [Module053Entity], { name: 'module053Items' })
  async getItems(): Promise<Module053Entity[]> {
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
  async computedField(@Parent() item: Module053Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
