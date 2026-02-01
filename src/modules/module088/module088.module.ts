import { Module } from '@nestjs/common';
import { Module088Resolver } from './module088.resolver';
import { Module088Loader } from './module088.loader';

@Module({
  providers: [Module088Resolver, Module088Loader],
})
export class Module088Module {}
