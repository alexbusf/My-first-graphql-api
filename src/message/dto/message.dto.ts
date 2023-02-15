import { ObjectType, Field, InputType } from "@nestjs/graphql";


@ObjectType('Characteristics')
@InputType('CharacteristicsInput')
class Characteristics {
    @Field()
    type: 'auto' | 'realty' | 'job'
}

@ObjectType('MessageType')
@InputType('MessageInputType')
export class MessageType {
    @Field()
    category: string

    @Field()
    title: string

    @Field()
    body: string

    @Field()
    characteristics: Characteristics;
}