import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ApplicationModule } from './application.module';
import { RenderService } from 'nest-next';

async function bootstrap() {
  const server = await NestFactory.create<NestExpressApplication>(
    ApplicationModule,
  );
  const configService: ConfigService = server.get<ConfigService>(ConfigService);
  const port = configService.get('PORT') || 7000;
  server.useStaticAssets(join(__dirname, '..', 'public'));
  const service = server.get(RenderService);

  service.setErrorHandler(async (err, req, res) => {
    // send JSON response
    console.log(err);
    res.send(err.response);
  });

  await server.listen(port);
}

bootstrap();
