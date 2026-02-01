import { Module } from '@nestjs/common';
import { Module006Resolver } from './module006.resolver';
import { Module006Loader } from './module006.loader';

@Module({
  providers: [Module006Resolver, Module006Loader],
})
export class Module006Module {}
