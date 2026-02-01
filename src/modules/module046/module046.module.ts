import { Module } from '@nestjs/common';
import { Module046Resolver } from './module046.resolver';
import { Module046Loader } from './module046.loader';

@Module({
  providers: [Module046Resolver, Module046Loader],
})
export class Module046Module {}
