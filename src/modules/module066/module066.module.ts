import { Module } from '@nestjs/common';
import { Module066Resolver } from './module066.resolver';
import { Module066Loader } from './module066.loader';

@Module({
  providers: [Module066Resolver, Module066Loader],
})
export class Module066Module {}
