import {z} from "zod";

const baseSchema = z.object({
    mode: z.enum(["channel", "category"]),
});

const channelSchema = baseSchema.extend({
    name: z.string().min(1, "채널 이름은 필수입니다"),
    categoryId: z.string(),
    channelType: z.enum(["TEXT", "VOICE"]),
});

const categorySchema = baseSchema.extend({
    categoryName: z.string().min(1, "카테고리 이름은 필수입니다"),
});

type ChannelFormValues = z.infer<typeof channelSchema>;
type CategoryFormValues = z.infer<typeof categorySchema>;

export {baseSchema, channelSchema, categorySchema};
export type { ChannelFormValues, CategoryFormValues };
