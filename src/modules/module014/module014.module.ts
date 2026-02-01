import { Module } from '@nestjs/common';
import { Module014Resolver } from './module014.resolver';
import { Module014Loader } from './module014.loader';

@Module({
  providers: [Module014Resolver, Module014Loader],
})
export class Module014Module {}
