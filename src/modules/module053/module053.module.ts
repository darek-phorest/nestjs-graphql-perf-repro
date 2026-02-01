import { Module } from '@nestjs/common';
import { Module053Resolver } from './module053.resolver';
import { Module053Loader } from './module053.loader';

@Module({
  providers: [Module053Resolver, Module053Loader],
})
export class Module053Module {}
