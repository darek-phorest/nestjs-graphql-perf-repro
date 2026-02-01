import { Module } from '@nestjs/common';
import { Module008Resolver } from './module008.resolver';
import { Module008Loader } from './module008.loader';

@Module({
  providers: [Module008Resolver, Module008Loader],
})
export class Module008Module {}
