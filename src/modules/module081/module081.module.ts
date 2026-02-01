import { Module } from '@nestjs/common';
import { Module081Resolver } from './module081.resolver';
import { Module081Loader } from './module081.loader';

@Module({
  providers: [Module081Resolver, Module081Loader],
})
export class Module081Module {}
