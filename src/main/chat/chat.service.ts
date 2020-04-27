import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CHAT_REPOSITORY } from '@app/common/constants';
import { Chat } from './chat.entity';

import * as _ from 'lodash';

@Injectable()
export class ChatService {
  constructor(
    @Inject(CHAT_REPOSITORY)
    private readonly chatRepository: Repository<Chat>
  ) {}

  getHello(): string {
    return '欢迎访问chat服务！';
  }

  // 添加用户
  public async addUser({ userName, socketId }) {
    const existChat = await this.chatRepository
                            .createQueryBuilder('chat')
                            .where('chat.userName = :userName', { userName })
                            .andWhere('chat.socketId = :socketId', { socketId })
                            .getOne();

    // 不存在用户记录则添加用户
    if (_.isUndefined(existChat)) {
      const chat = new Chat();
      chat.type = 'weishour';
      chat.userName = userName;
      chat.socketId = socketId;

      await this.chatRepository.save(chat);
      console.log(`${chat.userName}用户信息数据保存成功`);
    }
  }

  // 删除用户
  public async deleteUser(socketId) {
    const existChat = await this.getUser(socketId);

    await this.chatRepository.remove(existChat);
  }

  // 获取用户
  public async getUser(socketId): Promise<Chat> {
    let existChat = new Chat();
    existChat = await this.chatRepository
                            .createQueryBuilder('chat')
                            .where('chat.socketId = :socketId', { socketId })
                            .getOne();

    return existChat;
  }
}
