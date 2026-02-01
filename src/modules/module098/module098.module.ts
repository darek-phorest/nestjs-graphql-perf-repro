import { Module } from '@nestjs/common';
import { Module098Resolver } from './module098.resolver';
import { Module098Loader } from './module098.loader';

@Module({
  providers: [Module098Resolver, Module098Loader],
})
export class Module098Module {}
