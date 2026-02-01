import { Module } from '@nestjs/common';
import { Module024Resolver } from './module024.resolver';
import { Module024Loader } from './module024.loader';

@Module({
  providers: [Module024Resolver, Module024Loader],
})
export class Module024Module {}
