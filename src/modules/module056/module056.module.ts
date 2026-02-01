import { Module } from '@nestjs/common';
import { Module056Resolver } from './module056.resolver';
import { Module056Loader } from './module056.loader';

@Module({
  providers: [Module056Resolver, Module056Loader],
})
export class Module056Module {}
