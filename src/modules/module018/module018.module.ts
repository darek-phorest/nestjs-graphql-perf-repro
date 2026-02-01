import { Module } from '@nestjs/common';
import { Module018Resolver } from './module018.resolver';
import { Module018Loader } from './module018.loader';

@Module({
  providers: [Module018Resolver, Module018Loader],
})
export class Module018Module {}
