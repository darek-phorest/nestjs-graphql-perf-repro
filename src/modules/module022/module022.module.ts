import { Module } from '@nestjs/common';
import { Module022Resolver } from './module022.resolver';
import { Module022Loader } from './module022.loader';

@Module({
  providers: [Module022Resolver, Module022Loader],
})
export class Module022Module {}
