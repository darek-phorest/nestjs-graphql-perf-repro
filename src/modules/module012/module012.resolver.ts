import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module012Entity } from './module012.model';
import { Module012Loader } from './module012.loader';

@Resolver(() => Module012Entity)
export class Module012Resolver {
  constructor(private readonly loader: Module012Loader) {}

  @Query(() => [Module012Entity], { name: 'module012Items' })
  async getItems(): Promise<Module012Entity[]> {
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
  async computedField(@Parent() item: Module012Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
