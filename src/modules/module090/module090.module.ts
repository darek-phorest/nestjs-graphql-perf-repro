import { Module } from '@nestjs/common';
import { Module090Resolver } from './module090.resolver';
import { Module090Loader } from './module090.loader';

@Module({
  providers: [Module090Resolver, Module090Loader],
})
export class Module090Module {}
