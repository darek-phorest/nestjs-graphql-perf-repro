import { Module } from '@nestjs/common';
import { Module005Resolver } from './module005.resolver';
import { Module005Loader } from './module005.loader';

@Module({
  providers: [Module005Resolver, Module005Loader],
})
export class Module005Module {}
