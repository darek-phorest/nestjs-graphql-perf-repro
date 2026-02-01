import { Module } from '@nestjs/common';
import { Module070Resolver } from './module070.resolver';
import { Module070Loader } from './module070.loader';

@Module({
  providers: [Module070Resolver, Module070Loader],
})
export class Module070Module {}
