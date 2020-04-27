/*
 * @Description: file content
 * @Company: NR
 * @Author: weishour
 * @Date: 2020-01-04 14:27:33
 * @LastEditors  : weishour
 * @LastEditTime : 2020-01-04 15:35:04
 */
import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule
  ],
})
export class MainModule {}
