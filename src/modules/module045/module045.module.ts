import { Module } from '@nestjs/common';
import { Module045Resolver } from './module045.resolver';
import { Module045Loader } from './module045.loader';

@Module({
  providers: [Module045Resolver, Module045Loader],
})
export class Module045Module {}
