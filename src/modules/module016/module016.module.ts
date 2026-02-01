import { Module } from '@nestjs/common';
import { Module016Resolver } from './module016.resolver';
import { Module016Loader } from './module016.loader';

@Module({
  providers: [Module016Resolver, Module016Loader],
})
export class Module016Module {}
