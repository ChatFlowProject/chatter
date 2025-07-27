import {z} from 'zod';

export const updateProfileSchema = z.object({
    birth: z.string(),
    name: z.string(),
    newPassword: z.string().optional(),
    password: z.string(),
    avatarUrl: z.string().optional()
});

export type UpdateProfileRequest = z.infer<typeof updateProfileSchema>;