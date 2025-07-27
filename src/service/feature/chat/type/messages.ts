import {ChatMessage} from "@service/feature/chat/schema/messageSchema.ts";

export interface Chat {
    messageId: number;
    sender: ChatMessage["sender"];
    content: string;
    createdAt: string;
    isUpdated: boolean;
    isDeleted: boolean;
    attachments: any[];
    mentions: ChatMessage["mentions"];
    status: ChatMessage["status"];

}
