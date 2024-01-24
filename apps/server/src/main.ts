import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log'],
    bufferLogs: true,
  });

  app.enableCors({origin: "*"})
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      // clean unnecessary fields
      whitelist: true,
      // no accept unnecessary fields
      forbidNonWhitelisted: true,
    }),
  );

  const configSwagger = new DocumentBuilder()
    .setTitle('API example')
    .setDescription('Tasks with Authentication api')
    .setVersion('1.0')
    .addTag('tasks')
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
