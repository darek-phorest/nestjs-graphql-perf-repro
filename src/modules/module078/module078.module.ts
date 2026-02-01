import { Module } from '@nestjs/common';
import { Module078Resolver } from './module078.resolver';
import { Module078Loader } from './module078.loader';

@Module({
  providers: [Module078Resolver, Module078Loader],
})
export class Module078Module {}
