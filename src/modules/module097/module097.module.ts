import { Module } from '@nestjs/common';
import { Module097Resolver } from './module097.resolver';
import { Module097Loader } from './module097.loader';

@Module({
  providers: [Module097Resolver, Module097Loader],
})
export class Module097Module {}
