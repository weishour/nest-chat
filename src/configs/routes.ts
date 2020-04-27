/*
 * @Description: file content
 * @Company: NR
 * @Author: weishour
 * @Date: 2020-01-03 15:43:08
 * @LastEditors: weishour
 * @LastEditTime: 2020-01-03 15:43:38
 */
import { Routes } from 'nest-router';

// import { ServersModule } from 'servers/servers.module';
// import { DefaultModule } from 'servers/modules';

export const routes: Routes = [
    {
        path: '/servers',
        // module: ServersModule,
        children: [
            {
                path: '/default',
                // module: DefaultModule
            },
        ]
    },
];
