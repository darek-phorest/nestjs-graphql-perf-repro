import { Module } from '@nestjs/common';
import { Module010Resolver } from './module010.resolver';
import { Module010Loader } from './module010.loader';

@Module({
  providers: [Module010Resolver, Module010Loader],
})
export class Module010Module {}
