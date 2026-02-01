import { Module } from '@nestjs/common';
import { Module057Resolver } from './module057.resolver';
import { Module057Loader } from './module057.loader';

@Module({
  providers: [Module057Resolver, Module057Loader],
})
export class Module057Module {}
