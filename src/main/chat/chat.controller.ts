import { Controller, Get } from '@nestjs/common';
import { ChatService } from './chat.service';

import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Client, Server } from 'socket.io';

@WebSocketGateway()
@Controller()
export class ChatController implements OnGatewayConnection {
  constructor(
    private readonly chatService: ChatService
  ) {}

  @WebSocketServer()
  server: Server;

  handleConnection(socket) {
    console.log(`${socket.id} 上线！`);
  }

  handleDisconnect(socket) {
    console.log(`${socket.id} 下线！`);
    this.chatService.deleteUser(socket.id);
  }

  @Get()
  getHello(): string {
    return this.chatService.getHello();
  }

  @SubscribeMessage('addUser')
  async AddUser(sender, username: string) {
    await this.chatService.addUser({ userName: username, socketId: sender.id });
    sender.broadcast.emit('newUser', username);
  }

  @SubscribeMessage('sendMessage')
  async SendMessage(sender, msg) {
    const chat = await this.chatService.getUser(sender.id);
    sender.broadcast.emit('newMessage', { message: msg, username: chat.userName });
  }
}
