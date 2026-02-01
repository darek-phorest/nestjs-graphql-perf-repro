import { Module } from '@nestjs/common';
import { Module033Resolver } from './module033.resolver';
import { Module033Loader } from './module033.loader';

@Module({
  providers: [Module033Resolver, Module033Loader],
})
export class Module033Module {}
