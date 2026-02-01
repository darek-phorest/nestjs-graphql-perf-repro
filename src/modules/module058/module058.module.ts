import { Module } from '@nestjs/common';
import { Module058Resolver } from './module058.resolver';
import { Module058Loader } from './module058.loader';

@Module({
  providers: [Module058Resolver, Module058Loader],
})
export class Module058Module {}
