import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module096Entity } from './module096.model';
import { Module096Loader } from './module096.loader';

@Resolver(() => Module096Entity)
export class Module096Resolver {
  constructor(private readonly loader: Module096Loader) {}

  @Query(() => [Module096Entity], { name: 'module096Items' })
  async getItems(): Promise<Module096Entity[]> {
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
  async computedField(@Parent() item: Module096Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
