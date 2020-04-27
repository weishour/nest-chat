import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Client, Server } from 'socket.io';

import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection{
  @WebSocketServer()
  server: Server;

  handleConnection(socket) {
    console.log(`${socket.id} 上线！`);
  }

  handleDisconnect(socket) {
    console.log(`${socket.id} 下线！`);
  }

  @SubscribeMessage('addUser')
  AddUser(sender, username: string) {
    sender.broadcast.emit('newUser', username);
  }

  @SubscribeMessage('sendMessage')
  SendMessage(sender, data: { message: string, username: string }) {
    sender.broadcast.emit('newMessage', data);
  }
}
