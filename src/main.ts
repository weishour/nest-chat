import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new ConfigService();

  // 监听端口
  await app.listen(config.get('PORT')).then(() => {
      new Logger('weishour', true).log(`系统已经启动, http://localhost:${config.get('PORT')}`);
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
