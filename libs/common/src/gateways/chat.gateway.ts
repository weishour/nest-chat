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
export class ChatGateway implements OnGatewayConnection{
  @WebSocketServer()
  server: Server;

  handleConnection(socket) {
    console.log(`${socket.id} 上线！`);
  }

  handleDisconnect(socket) {
    console.log(`${socket.id} 下线！`);
  }
}
