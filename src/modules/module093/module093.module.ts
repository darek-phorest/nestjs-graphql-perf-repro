import { Module } from '@nestjs/common';
import { Module093Resolver } from './module093.resolver';
import { Module093Loader } from './module093.loader';

@Module({
  providers: [Module093Resolver, Module093Loader],
})
export class Module093Module {}
