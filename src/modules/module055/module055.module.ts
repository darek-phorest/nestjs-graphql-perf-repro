import { Module } from '@nestjs/common';
import { Module055Resolver } from './module055.resolver';
import { Module055Loader } from './module055.loader';

@Module({
  providers: [Module055Resolver, Module055Loader],
})
export class Module055Module {}
