import { Module } from '@nestjs/common';
import { Module038Resolver } from './module038.resolver';
import { Module038Loader } from './module038.loader';

@Module({
  providers: [Module038Resolver, Module038Loader],
})
export class Module038Module {}
