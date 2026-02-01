import { Module } from '@nestjs/common';
import { Module051Resolver } from './module051.resolver';
import { Module051Loader } from './module051.loader';

@Module({
  providers: [Module051Resolver, Module051Loader],
})
export class Module051Module {}
