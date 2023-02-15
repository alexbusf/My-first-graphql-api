import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageResolver } from './message.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from './entities/message.schema';

@Module({
  imports:[ MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }])],
  providers: [MessageResolver, MessageService]
})
export class MessageModule {}
