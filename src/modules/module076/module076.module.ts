import { Module } from '@nestjs/common';
import { Module076Resolver } from './module076.resolver';
import { Module076Loader } from './module076.loader';

@Module({
  providers: [Module076Resolver, Module076Loader],
})
export class Module076Module {}
