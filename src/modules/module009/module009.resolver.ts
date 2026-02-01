import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Module009Entity } from './module009.model';
import { Module009Loader } from './module009.loader';

@Resolver(() => Module009Entity)
export class Module009Resolver {
  constructor(private readonly loader: Module009Loader) {}

  @Query(() => [Module009Entity], { name: 'module009Items' })
  async getItems(): Promise<Module009Entity[]> {
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
  async computedField(@Parent() item: Module009Entity): Promise<string> {
    return this.loader.load(item.id);
  }
}
