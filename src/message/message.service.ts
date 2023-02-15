import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageType } from './dto/message.dto';
import { Message, MessageDocument } from './entities/message.schema';

@Injectable()
export class MessageService {

  constructor(@InjectModel(Message.name) private messageModel: Model<MessageDocument>) {}

  create(createMessageInput: MessageType) {
    const createMessage = new this.messageModel(createMessageInput);
    return createMessage.save();
  }

  findAll() {
    return this.messageModel.find().exec()
  }

  findOne(id: string) {
    return this.messageModel.findById(id);
  }

  update(id: string, updateMessageDto: MessageType) {
    return this.messageModel.findByIdAndUpdate(id, updateMessageDto);
  }

  remove(id: string) {
    return this.messageModel.findByIdAndDelete(id);
  }
}
