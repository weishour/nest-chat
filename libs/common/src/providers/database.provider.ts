/*
 * @Description: DatabaseProvider
 * @Company: NR
 * @Author: weishour
 * @Date: 2020-01-03 17:24:26
 * @LastEditors  : weishour
 * @LastEditTime : 2020-01-04 15:18:23
 */
import { createConnection } from 'typeorm';
import { DATABASE_CONNECTION } from '@nr/common/constants';
import { NrConfigService } from '@nr/common/services';

export const DatabaseProvider = [
    {
        provide: DATABASE_CONNECTION,
        inject: [NrConfigService],
        useFactory: async (config: NrConfigService) => await createConnection(config.get('database')),
    },
];
