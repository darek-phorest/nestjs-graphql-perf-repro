import { Module } from '@nestjs/common';
import { Module099Resolver } from './module099.resolver';
import { Module099Loader } from './module099.loader';

@Module({
  providers: [Module099Resolver, Module099Loader],
})
export class Module099Module {}
