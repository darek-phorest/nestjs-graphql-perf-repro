import { Module } from '@nestjs/common';
import { Module075Resolver } from './module075.resolver';
import { Module075Loader } from './module075.loader';

@Module({
  providers: [Module075Resolver, Module075Loader],
})
export class Module075Module {}
