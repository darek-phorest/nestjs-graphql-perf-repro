import { Module } from '@nestjs/common';
import { Module032Resolver } from './module032.resolver';
import { Module032Loader } from './module032.loader';

@Module({
  providers: [Module032Resolver, Module032Loader],
})
export class Module032Module {}
