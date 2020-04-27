/*
 * @Description: DatabaseModule
 * @Company: NR
 * @Author: weishour
 * @Date: 2020-01-03 17:47:07
 * @LastEditors  : weishour
 * @LastEditTime : 2020-01-04 14:48:08
 */
import { Module, Global } from '@nestjs/common';
import { DatabaseProvider } from '@nr/common/providers';

@Global()
@Module({
  providers: [...DatabaseProvider],
  exports: [...DatabaseProvider],
})
export class DatabaseModule {}
