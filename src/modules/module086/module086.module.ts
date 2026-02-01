import { Module } from '@nestjs/common';
import { Module086Resolver } from './module086.resolver';
import { Module086Loader } from './module086.loader';

@Module({
  providers: [Module086Resolver, Module086Loader],
})
export class Module086Module {}
