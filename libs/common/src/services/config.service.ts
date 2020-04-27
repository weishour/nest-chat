/*
 * @Description: file content
 * @Company: NR
 * @Author: weishour
 * @Date: 2020-01-02 15:40:52
 * @LastEditors  : weishour
 * @LastEditTime : 2020-01-02 16:10:00
 */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NrConfigService {
  constructor(private configService: ConfigService) {}

  get<T = any>(propertyPath: string, defaultValue?: T): T {
    return this.configService.get(propertyPath, defaultValue);
  }

  get port(): number {
    return this.configService.get('database.port');
  }
}
