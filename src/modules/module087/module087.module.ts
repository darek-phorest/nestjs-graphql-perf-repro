import { Module } from '@nestjs/common';
import { Module087Resolver } from './module087.resolver';
import { Module087Loader } from './module087.loader';

@Module({
  providers: [Module087Resolver, Module087Loader],
})
export class Module087Module {}
