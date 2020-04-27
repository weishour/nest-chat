import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { ChatProvider } from './chat.provider';
@Module({
  imports: [],
  controllers: [
    ChatController
  ],
  providers: [
    ChatService,
    ...ChatProvider,
    ChatController
  ],
})
export class ChatModule {
}
