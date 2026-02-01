import { Module } from '@nestjs/common';
import { Module091Resolver } from './module091.resolver';
import { Module091Loader } from './module091.loader';

@Module({
  providers: [Module091Resolver, Module091Loader],
})
export class Module091Module {}
