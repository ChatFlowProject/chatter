import { z } from 'zod';

const senderSchema = z.object({
  memberId: z.string(),
  name: z.string(),
  avatarUrl: z.string(),
});

const attachmentSchema = z.object({
  type: z.string(),
  url: z.string(),
});

export const messageSchema = z.object({
  messageId: z.number(),
  sender: senderSchema,
  content: z.string().min(1, '메시지를 입력해주세요'),
  createdAt: z.string().datetime({ message: '올바른 날짜/시간 형식이 아닙니다' }),
  isUpdated: z.boolean(),
  isDeleted: z.boolean(),
  attachments: z.array(attachmentSchema).optional(),
  mentions: z.array(z.string()).optional(),
  teamId: z.string(),
  status: z.enum(['pending', 'sent', 'error']).optional(),
  tempId: z.string().optional(),
});

export type ChatMessage = z.infer<typeof messageSchema>;