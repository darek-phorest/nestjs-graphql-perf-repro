import { Module } from '@nestjs/common';
import { Module072Resolver } from './module072.resolver';
import { Module072Loader } from './module072.loader';

@Module({
  providers: [Module072Resolver, Module072Loader],
})
export class Module072Module {}
