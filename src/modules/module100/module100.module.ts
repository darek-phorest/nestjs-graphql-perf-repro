import { Module } from '@nestjs/common';
import { Module100Resolver } from './module100.resolver';
import { Module100Loader } from './module100.loader';

@Module({
  providers: [Module100Resolver, Module100Loader],
})
export class Module100Module {}
