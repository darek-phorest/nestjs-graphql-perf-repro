import { Module } from '@nestjs/common';
import { Module082Resolver } from './module082.resolver';
import { Module082Loader } from './module082.loader';

@Module({
  providers: [Module082Resolver, Module082Loader],
})
export class Module082Module {}
