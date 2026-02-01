import { Module } from '@nestjs/common';
import { Module043Resolver } from './module043.resolver';
import { Module043Loader } from './module043.loader';

@Module({
  providers: [Module043Resolver, Module043Loader],
})
export class Module043Module {}
