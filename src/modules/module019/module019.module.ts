import { Module } from '@nestjs/common';
import { Module019Resolver } from './module019.resolver';
import { Module019Loader } from './module019.loader';

@Module({
  providers: [Module019Resolver, Module019Loader],
})
export class Module019Module {}
