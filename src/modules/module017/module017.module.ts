import { Module } from '@nestjs/common';
import { Module017Resolver } from './module017.resolver';
import { Module017Loader } from './module017.loader';

@Module({
  providers: [Module017Resolver, Module017Loader],
})
export class Module017Module {}
