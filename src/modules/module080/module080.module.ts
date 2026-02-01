import { Module } from '@nestjs/common';
import { Module080Resolver } from './module080.resolver';
import { Module080Loader } from './module080.loader';

@Module({
  providers: [Module080Resolver, Module080Loader],
})
export class Module080Module {}
