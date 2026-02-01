import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');

  console.log(`\nApplication running on http://localhost:${port}/graphql`);
  console.log(`GraphQL Playground: http://localhost:${port}/graphiql`);
  console.log(`\nFix applied: NO (original behavior)`);
}

bootstrap();