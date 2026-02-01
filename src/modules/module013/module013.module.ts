import { Module } from '@nestjs/common';
import { Module013Resolver } from './module013.resolver';
import { Module013Loader } from './module013.loader';

@Module({
  providers: [Module013Resolver, Module013Loader],
})
export class Module013Module {}
