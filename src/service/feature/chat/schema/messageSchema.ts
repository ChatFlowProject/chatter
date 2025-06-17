import { z } from 'zod';

const senderSchema = z.object({
  memberId: z.string(),
  username: z.string(),
  avatarUrl: z.string(),
});

const attachmentSchema = z.object({
  type: z.enum(['image', 'file']),
  url: z.string(),
});

export const messageSchema = z.object({
  chatId: z.string(),
  sender: senderSchema,
  content: z.string().min(1, '메시지를 입력해주세요'),
  attachments: z.array(attachmentSchema).optional(),
  createdAt: z
    .string()
    .datetime({ message: '올바른 날짜/시간 형식이 아닙니다' }),
});

export type ChatMessage = z.infer<typeof messageSchema>;