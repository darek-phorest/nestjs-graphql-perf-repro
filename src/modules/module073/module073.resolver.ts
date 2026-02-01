import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module073Entity } from './module073.model';
import { Module073Loader } from './module073.loader';

@Resolver(() => Module073Entity)
export class Module073Resolver {
  constructor(private readonly loader: Module073Loader) {}

  @Query(() => [Module073Entity], { name: 'module073Items' })
  async getItems(): Promise<Module073Entity[]> {
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
  async computedField(@Parent() item: Module073Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
