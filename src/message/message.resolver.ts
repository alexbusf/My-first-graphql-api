import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MessageService } from './message.service';
import { MessageType } from './dto/message.dto';


@Resolver(() => MessageType)
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}

  @Mutation(() => MessageType)
  createMessage(@Args('createMessageInput') createMessageInput: MessageType) {
    return this.messageService.create(createMessageInput);
  }

  @Query(() => [MessageType], { name: 'message' })
  findAll() {
    return this.messageService.findAll();
  }

  @Query(() => MessageType, { name: 'messageome' })
  findOne(@Args('id') id: string) {
    return this.messageService.findOne(id);
  }

  @Mutation(() => MessageType)
  updateMessage(@Args('id') id: string, @Args('updateMessageInput') updateMessageInput: MessageType) {
    return this.messageService.update(id, updateMessageInput);
  }

  @Mutation(() => MessageType)
  removeMessage(@Args('id') id: string) {
    return this.messageService.remove(id);
  }
}
