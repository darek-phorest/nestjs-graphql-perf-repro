import { Module } from '@nestjs/common';
import { Module031Resolver } from './module031.resolver';
import { Module031Loader } from './module031.loader';

@Module({
  providers: [Module031Resolver, Module031Loader],
})
export class Module031Module {}
