import { Module } from '@nestjs/common';
import { Module054Resolver } from './module054.resolver';
import { Module054Loader } from './module054.loader';

@Module({
  providers: [Module054Resolver, Module054Loader],
})
export class Module054Module {}
