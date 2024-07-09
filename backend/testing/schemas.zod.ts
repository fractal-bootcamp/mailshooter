import { z } from 'zod'

import type { MailingList } from '@prisma/client'

export const stringSchema = z.string()

export const mailingListSchema = z.object({
    id: z.string(),
    name: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
})