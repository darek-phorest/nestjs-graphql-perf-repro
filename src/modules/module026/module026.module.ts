import { Module } from '@nestjs/common';
import { Module026Resolver } from './module026.resolver';
import { Module026Loader } from './module026.loader';

@Module({
  providers: [Module026Resolver, Module026Loader],
})
export class Module026Module {}
