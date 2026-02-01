import { Module } from '@nestjs/common';
import { Module012Resolver } from './module012.resolver';
import { Module012Loader } from './module012.loader';

@Module({
  providers: [Module012Resolver, Module012Loader],
})
export class Module012Module {}
