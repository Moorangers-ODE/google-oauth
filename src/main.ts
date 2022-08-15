import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
// import { VersioningType } from '@nestjs/common';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const port = process.env.SERVER_PORT;
const logger = new Logger('NestApplication');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn'],
  });
  // app.setGlobalPrefix('/api');
  // app.enableVersioning({
  //   type: VersioningType.URI,
  // });

  // const config = new DocumentBuilder()
  //   .setTitle('Google-Oauth-NestJs')
  //   .setDescription('API Google Oauth with NestJs')
  //   .setVersion('1.0')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api/doc', app, document);

  await app.listen(port, () => logger.log(`Server Start on port ${port}`));
}

bootstrap();
