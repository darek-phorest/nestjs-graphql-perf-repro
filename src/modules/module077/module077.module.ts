import { Module } from '@nestjs/common';
import { Module077Resolver } from './module077.resolver';
import { Module077Loader } from './module077.loader';

@Module({
  providers: [Module077Resolver, Module077Loader],
})
export class Module077Module {}
