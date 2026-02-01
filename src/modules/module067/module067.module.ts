import { Module } from '@nestjs/common';
import { Module067Resolver } from './module067.resolver';
import { Module067Loader } from './module067.loader';

@Module({
  providers: [Module067Resolver, Module067Loader],
})
export class Module067Module {}
