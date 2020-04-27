/*
 * @Description: GlobalModule
 * @Company: NR
 * @Author: weishour
 * @Date: 2020-01-03 17:47:07
 * @LastEditors  : weishour
 * @LastEditTime : 2020-01-05 21:28:41
 */
import { Module, Global } from '@nestjs/common';
import { NrConfigModule } from '@nr/common/modules';
import { DatabaseProvider } from '@nr/common/providers';

@Global()
@Module({
  imports: [
    NrConfigModule,
  ],
  exports: [
    NrConfigModule,
    ...DatabaseProvider
  ],
  providers: [
    ...DatabaseProvider
  ],
})
export class GlobalModule {}
