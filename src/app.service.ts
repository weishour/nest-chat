/*
 * @Description: file content
 * @Company: NR
 * @Author: weishour
 * @Date: 2019-12-28 18:03:26
 * @LastEditors  : weishour
 * @LastEditTime : 2020-01-03 17:57:22
 */
import { Injectable } from '@nestjs/common';
import { NrConfigService } from '@nr/common/services';

@Injectable()
export class AppService {
  constructor(private readonly nrConfigService: NrConfigService) {}

  getHello(): string {
    console.log(this.nrConfigService.get('database'))
    console.log(this.nrConfigService.port)
    console.log(__dirname + '/../src/**/**.entity.ts')
    return '欢迎访问weishour服务！';
  }
}
