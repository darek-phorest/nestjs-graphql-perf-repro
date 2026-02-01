import { Module } from '@nestjs/common';
import { Module083Resolver } from './module083.resolver';
import { Module083Loader } from './module083.loader';

@Module({
  providers: [Module083Resolver, Module083Loader],
})
export class Module083Module {}
