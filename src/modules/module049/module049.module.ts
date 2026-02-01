import { Module } from '@nestjs/common';
import { Module049Resolver } from './module049.resolver';
import { Module049Loader } from './module049.loader';

@Module({
  providers: [Module049Resolver, Module049Loader],
})
export class Module049Module {}
