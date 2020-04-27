/*
 * @Description: 配置验证
 * @Company: NR
 * @Author: weishour
 * @Date: 2020-01-02 17:57:26
 * @LastEditors  : weishour
 * @LastEditTime : 2020-01-04 13:40:07
 */
import * as Joi from '@hapi/joi';

export const schema = Joi.object({
  NODE_ENV: Joi.string()
               .valid('dev', 'prod', 'test', 'prov')
               .default('dev'),
  PORT: Joi.number().default(3000),
  DATABASE_TYPE: Joi.string(),
  DATABASE_HOST: Joi.string(),
  DATABASE_PORT: Joi.number(),
  DATABASE_USER: Joi.string(),
  DATABASE_PWD: Joi.string(),
  DATABASE_DB: Joi.string(),
  DATABASE_PREFIX: Joi.string(),
  DATABASE_CHARSET: Joi.string(),
  DATABASE_LOG: Joi.boolean(),
  DATABASE_LOG_TYPE: Joi.string(),
  DATABASE_ENTITIES: Joi.string(),
  DATABASE_SUBSCRIBERS: Joi.string(),
  DATABASE_SYNCHRONIZE: Joi.boolean(),
  DATABASE_DROPSCHEMA: Joi.boolean(),
});

export const options = {
  allowUnknown: true,   // 控制是否在环境变量中允许未知键。默认是true
  abortEarly: true,     // 如果为true，则在第一个错误时停止验证；如果为false，则返回所有错误。默认为false
};
