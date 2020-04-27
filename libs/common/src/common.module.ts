/*
 * @Description: file content
 * @Company: NR
 * @Author: weishour
 * @Date: 2019-12-31 16:23:09
 * @LastEditors  : weishour
 * @LastEditTime : 2020-01-03 17:48:50
 */
import { Module } from '@nestjs/common';
import { NrConfigModule, DatabaseModule, GatewaysModule } from '@nr/common/modules';

@Module({
  imports: [
    NrConfigModule,
    DatabaseModule,
    GatewaysModule
  ],
  exports: [
    NrConfigModule,
    DatabaseModule,
    GatewaysModule
  ]
})
export class LibsCommonModule {}
