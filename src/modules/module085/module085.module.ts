import { Module } from '@nestjs/common';
import { Module085Resolver } from './module085.resolver';
import { Module085Loader } from './module085.loader';

@Module({
  providers: [Module085Resolver, Module085Loader],
})
export class Module085Module {}
