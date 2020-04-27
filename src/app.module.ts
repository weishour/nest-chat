/*
 * @Description: file content
 * @Company: NR
 * @Author: weishour
 * @Date: 2019-12-28 18:03:26
 * @LastEditors  : weishour
 * @LastEditTime : 2020-01-04 14:40:40
 */
import { Module } from '@nestjs/common';
import { LibsCommonModule } from '@nr/common';
import { RouterModule } from 'nest-router';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { routes } from '@app/configs/routes';
import { MainModule } from '@app/main/main.module';

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    LibsCommonModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client'),
      serveRoot: '/wsChat',
    }),
    MainModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
