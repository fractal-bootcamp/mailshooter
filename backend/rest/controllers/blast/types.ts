import { z } from "zod";

export const blastSchema = z.object({
    id: z.string(),
    name: z.string(),
    messagesSent: 
})

// write a schema for a messagesSent array
export const messageSchema = z.object({
    id: z.string(),
    recipientId: z.string(),
    content: z.string(),
    delivered: z.boolean(),
    sentTime: z.date(),
    blastId: z.string(),
})


