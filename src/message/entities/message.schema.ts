import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { type } from "os";


class Characteristics {
    type: 'auto' | 'realty' | 'job'
}

@Schema()
export class Message{
    @Prop()
    category: string

    @Prop()
    title: string

    @Prop()
    body: string

    @Prop()
    characteristics: Characteristics;
}

export type MessageDocument = Message & Document
export const MessageSchema = SchemaFactory.createForClass(Message)
