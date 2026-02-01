import { Module } from '@nestjs/common';
import { Module089Resolver } from './module089.resolver';
import { Module089Loader } from './module089.loader';

@Module({
  providers: [Module089Resolver, Module089Loader],
})
export class Module089Module {}
