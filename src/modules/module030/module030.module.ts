import { Module } from '@nestjs/common';
import { Module030Resolver } from './module030.resolver';
import { Module030Loader } from './module030.loader';

@Module({
  providers: [Module030Resolver, Module030Loader],
})
export class Module030Module {}
