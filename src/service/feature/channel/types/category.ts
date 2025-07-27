export enum ChannelType {
    TEXT = 'TEXT',
    VOICE = 'VOICE',
}

export interface CreateCategoryResponse {
    newCategoryId: string;
    position: number;
}

export interface MoveChannelRequest {
    destCategoryId: number;
    prevChannelId?: number;
    nextChannelId?: number;
}