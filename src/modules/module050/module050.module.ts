import { Module } from '@nestjs/common';
import { Module050Resolver } from './module050.resolver';
import { Module050Loader } from './module050.loader';

@Module({
  providers: [Module050Resolver, Module050Loader],
})
export class Module050Module {}
