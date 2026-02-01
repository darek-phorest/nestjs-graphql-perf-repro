import { Module } from '@nestjs/common';
import { Module039Resolver } from './module039.resolver';
import { Module039Loader } from './module039.loader';

@Module({
  providers: [Module039Resolver, Module039Loader],
})
export class Module039Module {}
