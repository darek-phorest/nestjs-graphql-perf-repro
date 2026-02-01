import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module004Entity } from './module004.model';
import { Module004Loader } from './module004.loader';

@Resolver(() => Module004Entity)
export class Module004Resolver {
  constructor(private readonly loader: Module004Loader) {}

  @Query(() => [Module004Entity], { name: 'module004Items' })
  async getItems(): Promise<Module004Entity[]> {
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
  async computedField(@Parent() item: Module004Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
