import { Module } from '@nestjs/common';
import { Module064Resolver } from './module064.resolver';
import { Module064Loader } from './module064.loader';

@Module({
  providers: [Module064Resolver, Module064Loader],
})
export class Module064Module {}
