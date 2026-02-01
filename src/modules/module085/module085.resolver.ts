import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module085Entity } from './module085.model';
import { Module085Loader } from './module085.loader';

@Resolver(() => Module085Entity)
export class Module085Resolver {
  constructor(private readonly loader: Module085Loader) {}

  @Query(() => [Module085Entity], { name: 'module085Items' })
  async getItems(): Promise<Module085Entity[]> {
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
  async computedField(@Parent() item: Module085Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
