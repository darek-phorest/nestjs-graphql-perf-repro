import { Module } from '@nestjs/common';
import { Module009Resolver } from './module009.resolver';
import { Module009Loader } from './module009.loader';

@Module({
  providers: [Module009Resolver, Module009Loader],
})
export class Module009Module {}
