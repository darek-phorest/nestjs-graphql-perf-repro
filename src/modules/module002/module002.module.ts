import { Module } from '@nestjs/common';
import { Module002Resolver } from './module002.resolver';
import { Module002Loader } from './module002.loader';

@Module({
  providers: [Module002Resolver, Module002Loader],
})
export class Module002Module {}
