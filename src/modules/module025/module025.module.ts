import { Module } from '@nestjs/common';
import { Module025Resolver } from './module025.resolver';
import { Module025Loader } from './module025.loader';

@Module({
  providers: [Module025Resolver, Module025Loader],
})
export class Module025Module {}
