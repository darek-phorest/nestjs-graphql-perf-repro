import { Module } from '@nestjs/common';
import { Module004Resolver } from './module004.resolver';
import { Module004Loader } from './module004.loader';

@Module({
  providers: [Module004Resolver, Module004Loader],
})
export class Module004Module {}
