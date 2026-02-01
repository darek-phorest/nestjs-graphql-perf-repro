import { Module } from '@nestjs/common';
import { Module029Resolver } from './module029.resolver';
import { Module029Loader } from './module029.loader';

@Module({
  providers: [Module029Resolver, Module029Loader],
})
export class Module029Module {}
