import { Module } from '@nestjs/common';
import { Module068Resolver } from './module068.resolver';
import { Module068Loader } from './module068.loader';

@Module({
  providers: [Module068Resolver, Module068Loader],
})
export class Module068Module {}
