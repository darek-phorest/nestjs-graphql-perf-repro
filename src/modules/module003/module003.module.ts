import { Module } from '@nestjs/common';
import { Module003Resolver } from './module003.resolver';
import { Module003Loader } from './module003.loader';

@Module({
  providers: [Module003Resolver, Module003Loader],
})
export class Module003Module {}
