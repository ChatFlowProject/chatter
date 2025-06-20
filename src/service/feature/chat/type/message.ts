// "messageId": 13,
//     "sender": {
//     "memberId": "fc810ff3-a156-410c-80db-939440507dc3",
//         "name": "최승은",
//         "avatarUrl": ""
// },
// "content": "ccc",
//     "createdAt": "2025-06-03T22:34:07.542118",
//     "isUpdated": false,
//     "isDeleted": false,
//     "attachments": []
// },

export interface ChatMessage {
    messageId : number;
    sender: {
        memberId: string;
        name: string;
        avatarUrl: string;
    },
    content: string,
    createdAt: string,
    isUpdated: boolean,
    isDeleted: boolean,
    attachments?: { type: string; url: string }[];
    status?: 'pending' | 'sent' | 'error';
    tempId?: string;
}