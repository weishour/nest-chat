/*
 * @Description: 数据库配置
 * @Company: NR
 * @Author: weishour
 * @Date: 2020-01-02 11:01:17
 * @LastEditors  : weishour
 * @LastEditTime : 2020-01-04 14:59:32
 */
import { registerAs } from '@nestjs/config';
import * as path from 'path';

export default registerAs('database', () => ({
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PWD,
  database: process.env.DATABASE_DB,
  charset: process.env.DATABASE_CHARSET,
  synchronize: process.env.DATABASE_SYNCHRONIZE,
  entityPrefix: process.env.DATABASE_PREFIX,
  logging: process.env.DATABASE_LOG,
  logger: process.env.DATABASE_LOG_TYPE,
  entities: [
    `${path.resolve(__dirname, '..')}${process.env.DATABASE_ENTITIES}`,
  ],
  subscribers: [
    `${path.resolve(__dirname, '..')}${process.env.DATABASE_SUBSCRIBERS}`,
  ],
  cache: {
    type: process.env.CACHE_TYPE,
    alwaysEnabled: true,
    options: {
        host: process.env.CACHE_HOST,
        port: process.env.CACHE_PORT,
        password: process.env.CACHE_PASSWORD,
    }
  }
}));
