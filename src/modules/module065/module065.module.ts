import { Module } from '@nestjs/common';
import { Module065Resolver } from './module065.resolver';
import { Module065Loader } from './module065.loader';

@Module({
  providers: [Module065Resolver, Module065Loader],
})
export class Module065Module {}
