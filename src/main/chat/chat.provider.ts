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
import { CHAT_REPOSITORY } from '@app/common/constants';
import { Chat } from './chat.entity';

export const ChatProvider = [
    {
        provide: CHAT_REPOSITORY,
        inject: [DATABASE_CONNECTION],
        useFactory: (connection: Connection) => connection.getRepository(Chat),
    },
];
