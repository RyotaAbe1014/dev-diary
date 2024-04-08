
import { z } from 'zod';

export const userArticleSchema = z.object({
    title: z.string().min(1, 'タイトルは必須です。'),
    description: z.string(),
    text: z.string().min(1, '本文は必須です。'),
});