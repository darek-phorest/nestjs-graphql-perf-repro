import { Module } from '@nestjs/common';
import { Module040Resolver } from './module040.resolver';
import { Module040Loader } from './module040.loader';

@Module({
  providers: [Module040Resolver, Module040Loader],
})
export class Module040Module {}
