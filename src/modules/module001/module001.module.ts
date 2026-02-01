import { Module } from '@nestjs/common';
import { Module001Resolver } from './module001.resolver';
import { Module001Loader } from './module001.loader';

@Module({
  providers: [Module001Resolver, Module001Loader],
})
export class Module001Module {}
