import { Module } from '@nestjs/common';
import { Module035Resolver } from './module035.resolver';
import { Module035Loader } from './module035.loader';

@Module({
  providers: [Module035Resolver, Module035Loader],
})
export class Module035Module {}
