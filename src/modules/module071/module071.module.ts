import { Module } from '@nestjs/common';
import { Module071Resolver } from './module071.resolver';
import { Module071Loader } from './module071.loader';

@Module({
  providers: [Module071Resolver, Module071Loader],
})
export class Module071Module {}
