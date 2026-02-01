import { Module } from '@nestjs/common';
import { Module034Resolver } from './module034.resolver';
import { Module034Loader } from './module034.loader';

@Module({
  providers: [Module034Resolver, Module034Loader],
})
export class Module034Module {}
