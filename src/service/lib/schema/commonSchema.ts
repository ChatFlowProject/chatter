import { z } from 'zod';

export const emailSchema = z
  .string()
  .min(1, '이메일은 필수입니다')
  .email('이메일 형식이 올바르지 않습니다');

export const passwordSchema = z
  .string()
  .min(6, '비밀번호는 최소 6자 이상이어야 합니다')
  .max(20, '비밀번호는 최대 20자까지 가능합니다');

export const nicknameSchema = z
  .string()
  .min(2, '닉네임은 최소 2자 이상')
  .max(10, '닉네임은 최대 10자까지');