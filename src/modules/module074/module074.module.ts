import { Module } from '@nestjs/common';
import { Module074Resolver } from './module074.resolver';
import { Module074Loader } from './module074.loader';

@Module({
  providers: [Module074Resolver, Module074Loader],
})
export class Module074Module {}
