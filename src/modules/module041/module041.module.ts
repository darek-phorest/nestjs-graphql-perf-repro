import { Module } from '@nestjs/common';
import { Module041Resolver } from './module041.resolver';
import { Module041Loader } from './module041.loader';

@Module({
  providers: [Module041Resolver, Module041Loader],
})
export class Module041Module {}
