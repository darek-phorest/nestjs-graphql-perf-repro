import { Module } from '@nestjs/common';
import { Module069Resolver } from './module069.resolver';
import { Module069Loader } from './module069.loader';

@Module({
  providers: [Module069Resolver, Module069Loader],
})
export class Module069Module {}
