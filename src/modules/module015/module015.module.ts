import { Module } from '@nestjs/common';
import { Module015Resolver } from './module015.resolver';
import { Module015Loader } from './module015.loader';

@Module({
  providers: [Module015Resolver, Module015Loader],
})
export class Module015Module {}
