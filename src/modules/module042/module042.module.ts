import { Module } from '@nestjs/common';
import { Module042Resolver } from './module042.resolver';
import { Module042Loader } from './module042.loader';

@Module({
  providers: [Module042Resolver, Module042Loader],
})
export class Module042Module {}
