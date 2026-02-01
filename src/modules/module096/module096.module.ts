import { Module } from '@nestjs/common';
import { Module096Resolver } from './module096.resolver';
import { Module096Loader } from './module096.loader';

@Module({
  providers: [Module096Resolver, Module096Loader],
})
export class Module096Module {}
