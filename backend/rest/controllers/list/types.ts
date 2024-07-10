import { z } from "zod";


export const stringSchema = z.string();

export const mailingListSchema = z.object({
    id: z.string(),
    name: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
});
