export interface Chat {
    messageId: number;
    sender: Sender;
    content: string;
    createdAt: string;
    isUpdated: boolean;
    isDeleted: boolean;
    attachments: any[];
}
