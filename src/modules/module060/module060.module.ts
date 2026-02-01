import { Module } from '@nestjs/common';
import { Module060Resolver } from './module060.resolver';
import { Module060Loader } from './module060.loader';

@Module({
  providers: [Module060Resolver, Module060Loader],
})
export class Module060Module {}
