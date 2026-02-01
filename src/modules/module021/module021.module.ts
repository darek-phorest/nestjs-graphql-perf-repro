import { Module } from '@nestjs/common';
import { Module021Resolver } from './module021.resolver';
import { Module021Loader } from './module021.loader';

@Module({
  providers: [Module021Resolver, Module021Loader],
})
export class Module021Module {}
