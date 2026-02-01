import { Module } from '@nestjs/common';
import { Module095Resolver } from './module095.resolver';
import { Module095Loader } from './module095.loader';

@Module({
  providers: [Module095Resolver, Module095Loader],
})
export class Module095Module {}
