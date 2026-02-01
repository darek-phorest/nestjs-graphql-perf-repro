import { Module } from '@nestjs/common';
import { Module047Resolver } from './module047.resolver';
import { Module047Loader } from './module047.loader';

@Module({
  providers: [Module047Resolver, Module047Loader],
})
export class Module047Module {}
