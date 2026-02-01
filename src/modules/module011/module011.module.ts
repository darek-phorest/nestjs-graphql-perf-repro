import { Module } from '@nestjs/common';
import { Module011Resolver } from './module011.resolver';
import { Module011Loader } from './module011.loader';

@Module({
  providers: [Module011Resolver, Module011Loader],
})
export class Module011Module {}
