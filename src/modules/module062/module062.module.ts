import { Module } from '@nestjs/common';
import { Module062Resolver } from './module062.resolver';
import { Module062Loader } from './module062.loader';

@Module({
  providers: [Module062Resolver, Module062Loader],
})
export class Module062Module {}
