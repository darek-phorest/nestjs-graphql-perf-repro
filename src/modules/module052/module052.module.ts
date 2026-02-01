import { Module } from '@nestjs/common';
import { Module052Resolver } from './module052.resolver';
import { Module052Loader } from './module052.loader';

@Module({
  providers: [Module052Resolver, Module052Loader],
})
export class Module052Module {}
