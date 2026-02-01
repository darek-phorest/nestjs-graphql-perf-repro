import { Module } from '@nestjs/common';
import { Module061Resolver } from './module061.resolver';
import { Module061Loader } from './module061.loader';

@Module({
  providers: [Module061Resolver, Module061Loader],
})
export class Module061Module {}
