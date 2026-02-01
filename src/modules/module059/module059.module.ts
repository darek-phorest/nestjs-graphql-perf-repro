import { Module } from '@nestjs/common';
import { Module059Resolver } from './module059.resolver';
import { Module059Loader } from './module059.loader';

@Module({
  providers: [Module059Resolver, Module059Loader],
})
export class Module059Module {}
