import { Module } from '@nestjs/common';
import { Module063Resolver } from './module063.resolver';
import { Module063Loader } from './module063.loader';

@Module({
  providers: [Module063Resolver, Module063Loader],
})
export class Module063Module {}
