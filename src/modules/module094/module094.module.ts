import { Module } from '@nestjs/common';
import { Module094Resolver } from './module094.resolver';
import { Module094Loader } from './module094.loader';

@Module({
  providers: [Module094Resolver, Module094Loader],
})
export class Module094Module {}
