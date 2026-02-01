import { Module } from '@nestjs/common';
import { Module036Resolver } from './module036.resolver';
import { Module036Loader } from './module036.loader';

@Module({
  providers: [Module036Resolver, Module036Loader],
})
export class Module036Module {}
