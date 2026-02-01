import { Module } from '@nestjs/common';
import { Module023Resolver } from './module023.resolver';
import { Module023Loader } from './module023.loader';

@Module({
  providers: [Module023Resolver, Module023Loader],
})
export class Module023Module {}
