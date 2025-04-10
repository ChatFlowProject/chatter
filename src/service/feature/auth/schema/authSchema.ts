import { z } from 'zod';
import { emailSchema, passwordSchema, nicknameSchema } from '../../../lib/schema/commonSchema';

// 로그인용 스키마
export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

// 회원가입용 스키마
export const registerSchema = z.object({
  email: emailSchema,
  name: z
    .string()
    .min(2, '이름은 2자 이상')
    .max(20, '이름은 20자 이하입니다'),
  nickname: nicknameSchema,
  password: passwordSchema,
  birthdate: z
    .string()
    .regex(/^\d{4}-\d{1,2}-\d{1,2}$/, '생년월일 형식이 올바르지 않습니다'),
});

// 타입 추론
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;