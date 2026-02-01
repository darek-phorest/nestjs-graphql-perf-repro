import { Module } from '@nestjs/common';
import { Module028Resolver } from './module028.resolver';
import { Module028Loader } from './module028.loader';

@Module({
  providers: [Module028Resolver, Module028Loader],
})
export class Module028Module {}
