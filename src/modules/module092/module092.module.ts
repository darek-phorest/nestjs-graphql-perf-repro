import { Module } from '@nestjs/common';
import { Module092Resolver } from './module092.resolver';
import { Module092Loader } from './module092.loader';

@Module({
  providers: [Module092Resolver, Module092Loader],
})
export class Module092Module {}
