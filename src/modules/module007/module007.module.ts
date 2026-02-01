import { Module } from '@nestjs/common';
import { Module007Resolver } from './module007.resolver';
import { Module007Loader } from './module007.loader';

@Module({
  providers: [Module007Resolver, Module007Loader],
})
export class Module007Module {}
