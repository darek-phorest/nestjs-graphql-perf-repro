import { Module } from '@nestjs/common';
import { Module027Resolver } from './module027.resolver';
import { Module027Loader } from './module027.loader';

@Module({
  providers: [Module027Resolver, Module027Loader],
})
export class Module027Module {}
