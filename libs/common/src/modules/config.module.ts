/*
 * @Description: file content
 * @Company: NR
 * @Author: weishour
 * @Date: 2020-01-02 13:22:20
 * @LastEditors: weishour
 * @LastEditTime: 2020-01-04 14:45:05
 */
import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import DatabaseConfig from '@app/configs/database';
import * as validation from '@app/configs/validation';

import { ConfigService } from '@nestjs/config';
import { NrConfigService } from '@nr/common/services';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        DatabaseConfig,
      ],
      validationSchema: validation.schema,
      validationOptions: validation.options
    }),
  ],
  providers: [
    ConfigService,
    NrConfigService,
  ],
  exports: [
    ConfigService,
    NrConfigService,
  ],
})
export class NrConfigModule {}
