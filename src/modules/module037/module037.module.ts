import { Module } from '@nestjs/common';
import { Module037Resolver } from './module037.resolver';
import { Module037Loader } from './module037.loader';

@Module({
  providers: [Module037Resolver, Module037Loader],
})
export class Module037Module {}
