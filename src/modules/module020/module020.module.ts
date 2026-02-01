import { Module } from '@nestjs/common';
import { Module020Resolver } from './module020.resolver';
import { Module020Loader } from './module020.loader';

@Module({
  providers: [Module020Resolver, Module020Loader],
})
export class Module020Module {}
