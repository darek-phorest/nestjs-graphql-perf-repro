import { Module } from '@nestjs/common';
import { Module073Resolver } from './module073.resolver';
import { Module073Loader } from './module073.loader';

@Module({
  providers: [Module073Resolver, Module073Loader],
})
export class Module073Module {}
