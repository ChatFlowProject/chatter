import { z } from 'zod';

export const messageSchema = z.object({
  content: z.string().min(1, '메시지를 입력해주세요'),
  channelId: z.string().uuid('올바르지 않은 채널 ID입니다'),
  sender: z.string().min(1),
});

export type ChatMessage = z.infer<typeof messageSchema>;