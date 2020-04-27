/*
 * @Description: CollectProvider
 * @Company: NR
 * @Author: weishour
 * @Date: 2019-08-13 13:55:05
 * @LastEditors  : weishour
 * @LastEditTime : 2020-01-04 14:50:58
 */
import { Connection } from 'typeorm';
import { DATABASE_CONNECTION } from '@nr/common/constants';
import { USER_REPOSITORY } from '@app/common/constants';
import { User } from './user.entity';

export const UserProvider = [
    {
        provide: USER_REPOSITORY,
        inject: [DATABASE_CONNECTION],
        useFactory: (connection: Connection) => connection.getRepository(User),
    },
];
