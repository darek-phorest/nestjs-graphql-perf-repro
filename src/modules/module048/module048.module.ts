import { Module } from '@nestjs/common';
import { Module048Resolver } from './module048.resolver';
import { Module048Loader } from './module048.loader';

@Module({
  providers: [Module048Resolver, Module048Loader],
})
export class Module048Module {}
