import { Module } from '@nestjs/common';
import { Module079Resolver } from './module079.resolver';
import { Module079Loader } from './module079.loader';

@Module({
  providers: [Module079Resolver, Module079Loader],
})
export class Module079Module {}
