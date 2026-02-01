import { Module } from '@nestjs/common';
import { Module084Resolver } from './module084.resolver';
import { Module084Loader } from './module084.loader';

@Module({
  providers: [Module084Resolver, Module084Loader],
})
export class Module084Module {}
