import { Module } from '@nestjs/common';
import { Module044Resolver } from './module044.resolver';
import { Module044Loader } from './module044.loader';

@Module({
  providers: [Module044Resolver, Module044Loader],
})
export class Module044Module {}
