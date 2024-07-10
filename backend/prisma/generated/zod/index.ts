import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable']);

export const AdminUserScalarFieldEnumSchema = z.enum(['id', 'email', 'name', 'clerkId', 'createdAt', 'updatedAt']);

export const PersonScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'createdAt', 'updatedAt']);

export const MailingListScalarFieldEnumSchema = z.enum(['id', 'name', 'createdAt', 'updatedAt']);

export const MessageScalarFieldEnumSchema = z.enum(['id', 'recipientId', 'content', 'delivered', 'sentTime', 'blastId', 'createdAt', 'updatedAt']);

export const BlastScalarFieldEnumSchema = z.enum(['id', 'name', 'authorId', 'createdAt', 'updatedAt']);

export const PersonsInMailingListsScalarFieldEnumSchema = z.enum(['id', 'personId', 'mailingListId']);

export const MailingListInBlastScalarFieldEnumSchema = z.enum(['id', 'mailingListId', 'blastId']);

export const SortOrderSchema = z.enum(['asc', 'desc']);

export const QueryModeSchema = z.enum(['default', 'insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// ADMIN USER SCHEMA
/////////////////////////////////////////

export const AdminUserSchema = z.object({
  id: z.string().cuid(),
  email: z.string(),
  name: z.string(),
  clerkId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type AdminUser = z.infer<typeof AdminUserSchema>

/////////////////////////////////////////
// PERSON SCHEMA
/////////////////////////////////////////

export const PersonSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  email: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Person = z.infer<typeof PersonSchema>

/////////////////////////////////////////
// MAILING LIST SCHEMA
/////////////////////////////////////////

export const MailingListSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type MailingList = z.infer<typeof MailingListSchema>

/////////////////////////////////////////
// MESSAGE SCHEMA
/////////////////////////////////////////

export const MessageSchema = z.object({
  id: z.string().cuid(),
  recipientId: z.string(),
  content: z.string(),
  delivered: z.boolean(),
  sentTime: z.coerce.date(),
  blastId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Message = z.infer<typeof MessageSchema>

/////////////////////////////////////////
// BLAST SCHEMA
/////////////////////////////////////////

export const BlastSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  authorId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Blast = z.infer<typeof BlastSchema>

/////////////////////////////////////////
// PERSONS IN MAILING LISTS SCHEMA
/////////////////////////////////////////

export const PersonsInMailingListsSchema = z.object({
  id: z.string().cuid(),
  personId: z.string(),
  mailingListId: z.string(),
})

export type PersonsInMailingLists = z.infer<typeof PersonsInMailingListsSchema>

/////////////////////////////////////////
// MAILING LIST IN BLAST SCHEMA
/////////////////////////////////////////

export const MailingListInBlastSchema = z.object({
  id: z.string().cuid(),
  mailingListId: z.string(),
  blastId: z.string(),
})

export type MailingListInBlast = z.infer<typeof MailingListInBlastSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// ADMIN USER
//------------------------------------------------------

export const AdminUserIncludeSchema: z.ZodType<Prisma.AdminUserInclude> = z.object({
  blasts: z.union([z.boolean(), z.lazy(() => BlastFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AdminUserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const AdminUserArgsSchema: z.ZodType<Prisma.AdminUserDefaultArgs> = z.object({
  select: z.lazy(() => AdminUserSelectSchema).optional(),
  include: z.lazy(() => AdminUserIncludeSchema).optional(),
}).strict();

export const AdminUserCountOutputTypeArgsSchema: z.ZodType<Prisma.AdminUserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => AdminUserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const AdminUserCountOutputTypeSelectSchema: z.ZodType<Prisma.AdminUserCountOutputTypeSelect> = z.object({
  blasts: z.boolean().optional(),
}).strict();

export const AdminUserSelectSchema: z.ZodType<Prisma.AdminUserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  clerkId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  blasts: z.union([z.boolean(), z.lazy(() => BlastFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AdminUserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PERSON
//------------------------------------------------------

export const PersonIncludeSchema: z.ZodType<Prisma.PersonInclude> = z.object({
  mailingLists: z.union([z.boolean(), z.lazy(() => PersonsInMailingListsFindManyArgsSchema)]).optional(),
  receivedMessages: z.union([z.boolean(), z.lazy(() => MessageFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PersonCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PersonArgsSchema: z.ZodType<Prisma.PersonDefaultArgs> = z.object({
  select: z.lazy(() => PersonSelectSchema).optional(),
  include: z.lazy(() => PersonIncludeSchema).optional(),
}).strict();

export const PersonCountOutputTypeArgsSchema: z.ZodType<Prisma.PersonCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PersonCountOutputTypeSelectSchema).nullish(),
}).strict();

export const PersonCountOutputTypeSelectSchema: z.ZodType<Prisma.PersonCountOutputTypeSelect> = z.object({
  mailingLists: z.boolean().optional(),
  receivedMessages: z.boolean().optional(),
}).strict();

export const PersonSelectSchema: z.ZodType<Prisma.PersonSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  mailingLists: z.union([z.boolean(), z.lazy(() => PersonsInMailingListsFindManyArgsSchema)]).optional(),
  receivedMessages: z.union([z.boolean(), z.lazy(() => MessageFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PersonCountOutputTypeArgsSchema)]).optional(),
}).strict()

// MAILING LIST
//------------------------------------------------------

export const MailingListIncludeSchema: z.ZodType<Prisma.MailingListInclude> = z.object({
  recipients: z.union([z.boolean(), z.lazy(() => PersonsInMailingListsFindManyArgsSchema)]).optional(),
  blasts: z.union([z.boolean(), z.lazy(() => MailingListInBlastFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MailingListCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const MailingListArgsSchema: z.ZodType<Prisma.MailingListDefaultArgs> = z.object({
  select: z.lazy(() => MailingListSelectSchema).optional(),
  include: z.lazy(() => MailingListIncludeSchema).optional(),
}).strict();

export const MailingListCountOutputTypeArgsSchema: z.ZodType<Prisma.MailingListCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => MailingListCountOutputTypeSelectSchema).nullish(),
}).strict();

export const MailingListCountOutputTypeSelectSchema: z.ZodType<Prisma.MailingListCountOutputTypeSelect> = z.object({
  recipients: z.boolean().optional(),
  blasts: z.boolean().optional(),
}).strict();

export const MailingListSelectSchema: z.ZodType<Prisma.MailingListSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  recipients: z.union([z.boolean(), z.lazy(() => PersonsInMailingListsFindManyArgsSchema)]).optional(),
  blasts: z.union([z.boolean(), z.lazy(() => MailingListInBlastFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MailingListCountOutputTypeArgsSchema)]).optional(),
}).strict()

// MESSAGE
//------------------------------------------------------

export const MessageIncludeSchema: z.ZodType<Prisma.MessageInclude> = z.object({
  recipient: z.union([z.boolean(), z.lazy(() => PersonArgsSchema)]).optional(),
  blast: z.union([z.boolean(), z.lazy(() => BlastArgsSchema)]).optional(),
}).strict()

export const MessageArgsSchema: z.ZodType<Prisma.MessageDefaultArgs> = z.object({
  select: z.lazy(() => MessageSelectSchema).optional(),
  include: z.lazy(() => MessageIncludeSchema).optional(),
}).strict();

export const MessageSelectSchema: z.ZodType<Prisma.MessageSelect> = z.object({
  id: z.boolean().optional(),
  recipientId: z.boolean().optional(),
  content: z.boolean().optional(),
  delivered: z.boolean().optional(),
  sentTime: z.boolean().optional(),
  blastId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  recipient: z.union([z.boolean(), z.lazy(() => PersonArgsSchema)]).optional(),
  blast: z.union([z.boolean(), z.lazy(() => BlastArgsSchema)]).optional(),
}).strict()

// BLAST
//------------------------------------------------------

export const BlastIncludeSchema: z.ZodType<Prisma.BlastInclude> = z.object({
  messagesSent: z.union([z.boolean(), z.lazy(() => MessageFindManyArgsSchema)]).optional(),
  MailingListInBlast: z.union([z.boolean(), z.lazy(() => MailingListInBlastFindManyArgsSchema)]).optional(),
  author: z.union([z.boolean(), z.lazy(() => AdminUserArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BlastCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BlastArgsSchema: z.ZodType<Prisma.BlastDefaultArgs> = z.object({
  select: z.lazy(() => BlastSelectSchema).optional(),
  include: z.lazy(() => BlastIncludeSchema).optional(),
}).strict();

export const BlastCountOutputTypeArgsSchema: z.ZodType<Prisma.BlastCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BlastCountOutputTypeSelectSchema).nullish(),
}).strict();

export const BlastCountOutputTypeSelectSchema: z.ZodType<Prisma.BlastCountOutputTypeSelect> = z.object({
  messagesSent: z.boolean().optional(),
  MailingListInBlast: z.boolean().optional(),
}).strict();

export const BlastSelectSchema: z.ZodType<Prisma.BlastSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  authorId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  messagesSent: z.union([z.boolean(), z.lazy(() => MessageFindManyArgsSchema)]).optional(),
  MailingListInBlast: z.union([z.boolean(), z.lazy(() => MailingListInBlastFindManyArgsSchema)]).optional(),
  author: z.union([z.boolean(), z.lazy(() => AdminUserArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BlastCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PERSONS IN MAILING LISTS
//------------------------------------------------------

export const PersonsInMailingListsIncludeSchema: z.ZodType<Prisma.PersonsInMailingListsInclude> = z.object({
  person: z.union([z.boolean(), z.lazy(() => PersonArgsSchema)]).optional(),
  mailingList: z.union([z.boolean(), z.lazy(() => MailingListArgsSchema)]).optional(),
}).strict()

export const PersonsInMailingListsArgsSchema: z.ZodType<Prisma.PersonsInMailingListsDefaultArgs> = z.object({
  select: z.lazy(() => PersonsInMailingListsSelectSchema).optional(),
  include: z.lazy(() => PersonsInMailingListsIncludeSchema).optional(),
}).strict();

export const PersonsInMailingListsSelectSchema: z.ZodType<Prisma.PersonsInMailingListsSelect> = z.object({
  id: z.boolean().optional(),
  personId: z.boolean().optional(),
  mailingListId: z.boolean().optional(),
  person: z.union([z.boolean(), z.lazy(() => PersonArgsSchema)]).optional(),
  mailingList: z.union([z.boolean(), z.lazy(() => MailingListArgsSchema)]).optional(),
}).strict()

// MAILING LIST IN BLAST
//------------------------------------------------------

export const MailingListInBlastIncludeSchema: z.ZodType<Prisma.MailingListInBlastInclude> = z.object({
  mailingList: z.union([z.boolean(), z.lazy(() => MailingListArgsSchema)]).optional(),
  blast: z.union([z.boolean(), z.lazy(() => BlastArgsSchema)]).optional(),
}).strict()

export const MailingListInBlastArgsSchema: z.ZodType<Prisma.MailingListInBlastDefaultArgs> = z.object({
  select: z.lazy(() => MailingListInBlastSelectSchema).optional(),
  include: z.lazy(() => MailingListInBlastIncludeSchema).optional(),
}).strict();

export const MailingListInBlastSelectSchema: z.ZodType<Prisma.MailingListInBlastSelect> = z.object({
  id: z.boolean().optional(),
  mailingListId: z.boolean().optional(),
  blastId: z.boolean().optional(),
  mailingList: z.union([z.boolean(), z.lazy(() => MailingListArgsSchema)]).optional(),
  blast: z.union([z.boolean(), z.lazy(() => BlastArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const AdminUserWhereInputSchema: z.ZodType<Prisma.AdminUserWhereInput> = z.object({
  AND: z.union([z.lazy(() => AdminUserWhereInputSchema), z.lazy(() => AdminUserWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => AdminUserWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => AdminUserWhereInputSchema), z.lazy(() => AdminUserWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  clerkId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  blasts: z.lazy(() => BlastListRelationFilterSchema).optional()
}).strict();

export const AdminUserOrderByWithRelationInputSchema: z.ZodType<Prisma.AdminUserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  clerkId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  blasts: z.lazy(() => BlastOrderByRelationAggregateInputSchema).optional()
}).strict();

export const AdminUserWhereUniqueInputSchema: z.ZodType<Prisma.AdminUserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    email: z.string(),
    clerkId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
    email: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    clerkId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    email: z.string(),
    clerkId: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
  z.object({
    clerkId: z.string(),
  }),
])
  .and(z.object({
    id: z.string().cuid().optional(),
    email: z.string().optional(),
    clerkId: z.string().optional(),
    AND: z.union([z.lazy(() => AdminUserWhereInputSchema), z.lazy(() => AdminUserWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => AdminUserWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => AdminUserWhereInputSchema), z.lazy(() => AdminUserWhereInputSchema).array()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    blasts: z.lazy(() => BlastListRelationFilterSchema).optional()
  }).strict());

export const AdminUserOrderByWithAggregationInputSchema: z.ZodType<Prisma.AdminUserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  clerkId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AdminUserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AdminUserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AdminUserMinOrderByAggregateInputSchema).optional()
}).strict();

export const AdminUserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AdminUserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => AdminUserScalarWhereWithAggregatesInputSchema), z.lazy(() => AdminUserScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => AdminUserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => AdminUserScalarWhereWithAggregatesInputSchema), z.lazy(() => AdminUserScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  clerkId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
}).strict();

export const PersonWhereInputSchema: z.ZodType<Prisma.PersonWhereInput> = z.object({
  AND: z.union([z.lazy(() => PersonWhereInputSchema), z.lazy(() => PersonWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => PersonWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => PersonWhereInputSchema), z.lazy(() => PersonWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  mailingLists: z.lazy(() => PersonsInMailingListsListRelationFilterSchema).optional(),
  receivedMessages: z.lazy(() => MessageListRelationFilterSchema).optional()
}).strict();

export const PersonOrderByWithRelationInputSchema: z.ZodType<Prisma.PersonOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  mailingLists: z.lazy(() => PersonsInMailingListsOrderByRelationAggregateInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageOrderByRelationAggregateInputSchema).optional()
}).strict();

export const PersonWhereUniqueInputSchema: z.ZodType<Prisma.PersonWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    email: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    email: z.string(),
  }),
])
  .and(z.object({
    id: z.string().cuid().optional(),
    email: z.string().optional(),
    AND: z.union([z.lazy(() => PersonWhereInputSchema), z.lazy(() => PersonWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => PersonWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => PersonWhereInputSchema), z.lazy(() => PersonWhereInputSchema).array()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    mailingLists: z.lazy(() => PersonsInMailingListsListRelationFilterSchema).optional(),
    receivedMessages: z.lazy(() => MessageListRelationFilterSchema).optional()
  }).strict());

export const PersonOrderByWithAggregationInputSchema: z.ZodType<Prisma.PersonOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PersonCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PersonMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PersonMinOrderByAggregateInputSchema).optional()
}).strict();

export const PersonScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PersonScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => PersonScalarWhereWithAggregatesInputSchema), z.lazy(() => PersonScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => PersonScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => PersonScalarWhereWithAggregatesInputSchema), z.lazy(() => PersonScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
}).strict();

export const MailingListWhereInputSchema: z.ZodType<Prisma.MailingListWhereInput> = z.object({
  AND: z.union([z.lazy(() => MailingListWhereInputSchema), z.lazy(() => MailingListWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => MailingListWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => MailingListWhereInputSchema), z.lazy(() => MailingListWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  recipients: z.lazy(() => PersonsInMailingListsListRelationFilterSchema).optional(),
  blasts: z.lazy(() => MailingListInBlastListRelationFilterSchema).optional()
}).strict();

export const MailingListOrderByWithRelationInputSchema: z.ZodType<Prisma.MailingListOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  recipients: z.lazy(() => PersonsInMailingListsOrderByRelationAggregateInputSchema).optional(),
  blasts: z.lazy(() => MailingListInBlastOrderByRelationAggregateInputSchema).optional()
}).strict();

export const MailingListWhereUniqueInputSchema: z.ZodType<Prisma.MailingListWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
  .and(z.object({
    id: z.string().cuid().optional(),
    AND: z.union([z.lazy(() => MailingListWhereInputSchema), z.lazy(() => MailingListWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => MailingListWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => MailingListWhereInputSchema), z.lazy(() => MailingListWhereInputSchema).array()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    recipients: z.lazy(() => PersonsInMailingListsListRelationFilterSchema).optional(),
    blasts: z.lazy(() => MailingListInBlastListRelationFilterSchema).optional()
  }).strict());

export const MailingListOrderByWithAggregationInputSchema: z.ZodType<Prisma.MailingListOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MailingListCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MailingListMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MailingListMinOrderByAggregateInputSchema).optional()
}).strict();

export const MailingListScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MailingListScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => MailingListScalarWhereWithAggregatesInputSchema), z.lazy(() => MailingListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => MailingListScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => MailingListScalarWhereWithAggregatesInputSchema), z.lazy(() => MailingListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
}).strict();

export const MessageWhereInputSchema: z.ZodType<Prisma.MessageWhereInput> = z.object({
  AND: z.union([z.lazy(() => MessageWhereInputSchema), z.lazy(() => MessageWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => MessageWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => MessageWhereInputSchema), z.lazy(() => MessageWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  recipientId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  delivered: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  sentTime: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  blastId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  recipient: z.union([z.lazy(() => PersonRelationFilterSchema), z.lazy(() => PersonWhereInputSchema)]).optional(),
  blast: z.union([z.lazy(() => BlastRelationFilterSchema), z.lazy(() => BlastWhereInputSchema)]).optional(),
}).strict();

export const MessageOrderByWithRelationInputSchema: z.ZodType<Prisma.MessageOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  recipientId: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  delivered: z.lazy(() => SortOrderSchema).optional(),
  sentTime: z.lazy(() => SortOrderSchema).optional(),
  blastId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  recipient: z.lazy(() => PersonOrderByWithRelationInputSchema).optional(),
  blast: z.lazy(() => BlastOrderByWithRelationInputSchema).optional()
}).strict();

export const MessageWhereUniqueInputSchema: z.ZodType<Prisma.MessageWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
  .and(z.object({
    id: z.string().cuid().optional(),
    AND: z.union([z.lazy(() => MessageWhereInputSchema), z.lazy(() => MessageWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => MessageWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => MessageWhereInputSchema), z.lazy(() => MessageWhereInputSchema).array()]).optional(),
    recipientId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    delivered: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    sentTime: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    blastId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    recipient: z.union([z.lazy(() => PersonRelationFilterSchema), z.lazy(() => PersonWhereInputSchema)]).optional(),
    blast: z.union([z.lazy(() => BlastRelationFilterSchema), z.lazy(() => BlastWhereInputSchema)]).optional(),
  }).strict());

export const MessageOrderByWithAggregationInputSchema: z.ZodType<Prisma.MessageOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  recipientId: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  delivered: z.lazy(() => SortOrderSchema).optional(),
  sentTime: z.lazy(() => SortOrderSchema).optional(),
  blastId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MessageCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MessageMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MessageMinOrderByAggregateInputSchema).optional()
}).strict();

export const MessageScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MessageScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => MessageScalarWhereWithAggregatesInputSchema), z.lazy(() => MessageScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => MessageScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => MessageScalarWhereWithAggregatesInputSchema), z.lazy(() => MessageScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  recipientId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  delivered: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
  sentTime: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  blastId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
}).strict();

export const BlastWhereInputSchema: z.ZodType<Prisma.BlastWhereInput> = z.object({
  AND: z.union([z.lazy(() => BlastWhereInputSchema), z.lazy(() => BlastWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => BlastWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => BlastWhereInputSchema), z.lazy(() => BlastWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  authorId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  messagesSent: z.lazy(() => MessageListRelationFilterSchema).optional(),
  MailingListInBlast: z.lazy(() => MailingListInBlastListRelationFilterSchema).optional(),
  author: z.union([z.lazy(() => AdminUserRelationFilterSchema), z.lazy(() => AdminUserWhereInputSchema)]).optional(),
}).strict();

export const BlastOrderByWithRelationInputSchema: z.ZodType<Prisma.BlastOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  messagesSent: z.lazy(() => MessageOrderByRelationAggregateInputSchema).optional(),
  MailingListInBlast: z.lazy(() => MailingListInBlastOrderByRelationAggregateInputSchema).optional(),
  author: z.lazy(() => AdminUserOrderByWithRelationInputSchema).optional()
}).strict();

export const BlastWhereUniqueInputSchema: z.ZodType<Prisma.BlastWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
  .and(z.object({
    id: z.string().cuid().optional(),
    AND: z.union([z.lazy(() => BlastWhereInputSchema), z.lazy(() => BlastWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => BlastWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => BlastWhereInputSchema), z.lazy(() => BlastWhereInputSchema).array()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    authorId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    messagesSent: z.lazy(() => MessageListRelationFilterSchema).optional(),
    MailingListInBlast: z.lazy(() => MailingListInBlastListRelationFilterSchema).optional(),
    author: z.union([z.lazy(() => AdminUserRelationFilterSchema), z.lazy(() => AdminUserWhereInputSchema)]).optional(),
  }).strict());

export const BlastOrderByWithAggregationInputSchema: z.ZodType<Prisma.BlastOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BlastCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BlastMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BlastMinOrderByAggregateInputSchema).optional()
}).strict();

export const BlastScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BlastScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => BlastScalarWhereWithAggregatesInputSchema), z.lazy(() => BlastScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => BlastScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => BlastScalarWhereWithAggregatesInputSchema), z.lazy(() => BlastScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  authorId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
}).strict();

export const PersonsInMailingListsWhereInputSchema: z.ZodType<Prisma.PersonsInMailingListsWhereInput> = z.object({
  AND: z.union([z.lazy(() => PersonsInMailingListsWhereInputSchema), z.lazy(() => PersonsInMailingListsWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => PersonsInMailingListsWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => PersonsInMailingListsWhereInputSchema), z.lazy(() => PersonsInMailingListsWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  personId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  mailingListId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  person: z.union([z.lazy(() => PersonRelationFilterSchema), z.lazy(() => PersonWhereInputSchema)]).optional(),
  mailingList: z.union([z.lazy(() => MailingListRelationFilterSchema), z.lazy(() => MailingListWhereInputSchema)]).optional(),
}).strict();

export const PersonsInMailingListsOrderByWithRelationInputSchema: z.ZodType<Prisma.PersonsInMailingListsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  mailingListId: z.lazy(() => SortOrderSchema).optional(),
  person: z.lazy(() => PersonOrderByWithRelationInputSchema).optional(),
  mailingList: z.lazy(() => MailingListOrderByWithRelationInputSchema).optional()
}).strict();

export const PersonsInMailingListsWhereUniqueInputSchema: z.ZodType<Prisma.PersonsInMailingListsWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    personId_mailingListId: z.lazy(() => PersonsInMailingListsPersonIdMailingListIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    personId_mailingListId: z.lazy(() => PersonsInMailingListsPersonIdMailingListIdCompoundUniqueInputSchema),
  }),
])
  .and(z.object({
    id: z.string().cuid().optional(),
    personId_mailingListId: z.lazy(() => PersonsInMailingListsPersonIdMailingListIdCompoundUniqueInputSchema).optional(),
    AND: z.union([z.lazy(() => PersonsInMailingListsWhereInputSchema), z.lazy(() => PersonsInMailingListsWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => PersonsInMailingListsWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => PersonsInMailingListsWhereInputSchema), z.lazy(() => PersonsInMailingListsWhereInputSchema).array()]).optional(),
    personId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    mailingListId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    person: z.union([z.lazy(() => PersonRelationFilterSchema), z.lazy(() => PersonWhereInputSchema)]).optional(),
    mailingList: z.union([z.lazy(() => MailingListRelationFilterSchema), z.lazy(() => MailingListWhereInputSchema)]).optional(),
  }).strict());

export const PersonsInMailingListsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PersonsInMailingListsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  mailingListId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PersonsInMailingListsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PersonsInMailingListsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PersonsInMailingListsMinOrderByAggregateInputSchema).optional()
}).strict();

export const PersonsInMailingListsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PersonsInMailingListsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => PersonsInMailingListsScalarWhereWithAggregatesInputSchema), z.lazy(() => PersonsInMailingListsScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => PersonsInMailingListsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => PersonsInMailingListsScalarWhereWithAggregatesInputSchema), z.lazy(() => PersonsInMailingListsScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  personId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  mailingListId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
}).strict();

export const MailingListInBlastWhereInputSchema: z.ZodType<Prisma.MailingListInBlastWhereInput> = z.object({
  AND: z.union([z.lazy(() => MailingListInBlastWhereInputSchema), z.lazy(() => MailingListInBlastWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => MailingListInBlastWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => MailingListInBlastWhereInputSchema), z.lazy(() => MailingListInBlastWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  mailingListId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  blastId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  mailingList: z.union([z.lazy(() => MailingListRelationFilterSchema), z.lazy(() => MailingListWhereInputSchema)]).optional(),
  blast: z.union([z.lazy(() => BlastRelationFilterSchema), z.lazy(() => BlastWhereInputSchema)]).optional(),
}).strict();

export const MailingListInBlastOrderByWithRelationInputSchema: z.ZodType<Prisma.MailingListInBlastOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  mailingListId: z.lazy(() => SortOrderSchema).optional(),
  blastId: z.lazy(() => SortOrderSchema).optional(),
  mailingList: z.lazy(() => MailingListOrderByWithRelationInputSchema).optional(),
  blast: z.lazy(() => BlastOrderByWithRelationInputSchema).optional()
}).strict();

export const MailingListInBlastWhereUniqueInputSchema: z.ZodType<Prisma.MailingListInBlastWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    mailingListId_blastId: z.lazy(() => MailingListInBlastMailingListIdBlastIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    mailingListId_blastId: z.lazy(() => MailingListInBlastMailingListIdBlastIdCompoundUniqueInputSchema),
  }),
])
  .and(z.object({
    id: z.string().cuid().optional(),
    mailingListId_blastId: z.lazy(() => MailingListInBlastMailingListIdBlastIdCompoundUniqueInputSchema).optional(),
    AND: z.union([z.lazy(() => MailingListInBlastWhereInputSchema), z.lazy(() => MailingListInBlastWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => MailingListInBlastWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => MailingListInBlastWhereInputSchema), z.lazy(() => MailingListInBlastWhereInputSchema).array()]).optional(),
    mailingListId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    blastId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    mailingList: z.union([z.lazy(() => MailingListRelationFilterSchema), z.lazy(() => MailingListWhereInputSchema)]).optional(),
    blast: z.union([z.lazy(() => BlastRelationFilterSchema), z.lazy(() => BlastWhereInputSchema)]).optional(),
  }).strict());

export const MailingListInBlastOrderByWithAggregationInputSchema: z.ZodType<Prisma.MailingListInBlastOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  mailingListId: z.lazy(() => SortOrderSchema).optional(),
  blastId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MailingListInBlastCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MailingListInBlastMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MailingListInBlastMinOrderByAggregateInputSchema).optional()
}).strict();

export const MailingListInBlastScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MailingListInBlastScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => MailingListInBlastScalarWhereWithAggregatesInputSchema), z.lazy(() => MailingListInBlastScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => MailingListInBlastScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => MailingListInBlastScalarWhereWithAggregatesInputSchema), z.lazy(() => MailingListInBlastScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  mailingListId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  blastId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
}).strict();

export const AdminUserCreateInputSchema: z.ZodType<Prisma.AdminUserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  clerkId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  blasts: z.lazy(() => BlastCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const AdminUserUncheckedCreateInputSchema: z.ZodType<Prisma.AdminUserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  clerkId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  blasts: z.lazy(() => BlastUncheckedCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const AdminUserUpdateInputSchema: z.ZodType<Prisma.AdminUserUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  clerkId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  blasts: z.lazy(() => BlastUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const AdminUserUncheckedUpdateInputSchema: z.ZodType<Prisma.AdminUserUncheckedUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  clerkId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  blasts: z.lazy(() => BlastUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const AdminUserCreateManyInputSchema: z.ZodType<Prisma.AdminUserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  clerkId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AdminUserUpdateManyMutationInputSchema: z.ZodType<Prisma.AdminUserUpdateManyMutationInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  clerkId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const AdminUserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AdminUserUncheckedUpdateManyInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  clerkId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const PersonCreateInputSchema: z.ZodType<Prisma.PersonCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mailingLists: z.lazy(() => PersonsInMailingListsCreateNestedManyWithoutPersonInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageCreateNestedManyWithoutRecipientInputSchema).optional()
}).strict();

export const PersonUncheckedCreateInputSchema: z.ZodType<Prisma.PersonUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mailingLists: z.lazy(() => PersonsInMailingListsUncheckedCreateNestedManyWithoutPersonInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutRecipientInputSchema).optional()
}).strict();

export const PersonUpdateInputSchema: z.ZodType<Prisma.PersonUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  mailingLists: z.lazy(() => PersonsInMailingListsUpdateManyWithoutPersonNestedInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageUpdateManyWithoutRecipientNestedInputSchema).optional()
}).strict();

export const PersonUncheckedUpdateInputSchema: z.ZodType<Prisma.PersonUncheckedUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  mailingLists: z.lazy(() => PersonsInMailingListsUncheckedUpdateManyWithoutPersonNestedInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageUncheckedUpdateManyWithoutRecipientNestedInputSchema).optional()
}).strict();

export const PersonCreateManyInputSchema: z.ZodType<Prisma.PersonCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PersonUpdateManyMutationInputSchema: z.ZodType<Prisma.PersonUpdateManyMutationInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const PersonUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PersonUncheckedUpdateManyInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const MailingListCreateInputSchema: z.ZodType<Prisma.MailingListCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  recipients: z.lazy(() => PersonsInMailingListsCreateNestedManyWithoutMailingListInputSchema).optional(),
  blasts: z.lazy(() => MailingListInBlastCreateNestedManyWithoutMailingListInputSchema).optional()
}).strict();

export const MailingListUncheckedCreateInputSchema: z.ZodType<Prisma.MailingListUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  recipients: z.lazy(() => PersonsInMailingListsUncheckedCreateNestedManyWithoutMailingListInputSchema).optional(),
  blasts: z.lazy(() => MailingListInBlastUncheckedCreateNestedManyWithoutMailingListInputSchema).optional()
}).strict();

export const MailingListUpdateInputSchema: z.ZodType<Prisma.MailingListUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  recipients: z.lazy(() => PersonsInMailingListsUpdateManyWithoutMailingListNestedInputSchema).optional(),
  blasts: z.lazy(() => MailingListInBlastUpdateManyWithoutMailingListNestedInputSchema).optional()
}).strict();

export const MailingListUncheckedUpdateInputSchema: z.ZodType<Prisma.MailingListUncheckedUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  recipients: z.lazy(() => PersonsInMailingListsUncheckedUpdateManyWithoutMailingListNestedInputSchema).optional(),
  blasts: z.lazy(() => MailingListInBlastUncheckedUpdateManyWithoutMailingListNestedInputSchema).optional()
}).strict();

export const MailingListCreateManyInputSchema: z.ZodType<Prisma.MailingListCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MailingListUpdateManyMutationInputSchema: z.ZodType<Prisma.MailingListUpdateManyMutationInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const MailingListUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MailingListUncheckedUpdateManyInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const MessageCreateInputSchema: z.ZodType<Prisma.MessageCreateInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  delivered: z.boolean().optional(),
  sentTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  recipient: z.lazy(() => PersonCreateNestedOneWithoutReceivedMessagesInputSchema),
  blast: z.lazy(() => BlastCreateNestedOneWithoutMessagesSentInputSchema)
}).strict();

export const MessageUncheckedCreateInputSchema: z.ZodType<Prisma.MessageUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  recipientId: z.string(),
  content: z.string(),
  delivered: z.boolean().optional(),
  sentTime: z.coerce.date(),
  blastId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MessageUpdateInputSchema: z.ZodType<Prisma.MessageUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  delivered: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sentTime: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  recipient: z.lazy(() => PersonUpdateOneRequiredWithoutReceivedMessagesNestedInputSchema).optional(),
  blast: z.lazy(() => BlastUpdateOneRequiredWithoutMessagesSentNestedInputSchema).optional()
}).strict();

export const MessageUncheckedUpdateInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  recipientId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  delivered: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sentTime: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  blastId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const MessageCreateManyInputSchema: z.ZodType<Prisma.MessageCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  recipientId: z.string(),
  content: z.string(),
  delivered: z.boolean().optional(),
  sentTime: z.coerce.date(),
  blastId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MessageUpdateManyMutationInputSchema: z.ZodType<Prisma.MessageUpdateManyMutationInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  delivered: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sentTime: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const MessageUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateManyInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  recipientId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  delivered: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sentTime: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  blastId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const BlastCreateInputSchema: z.ZodType<Prisma.BlastCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  messagesSent: z.lazy(() => MessageCreateNestedManyWithoutBlastInputSchema).optional(),
  MailingListInBlast: z.lazy(() => MailingListInBlastCreateNestedManyWithoutBlastInputSchema).optional(),
  author: z.lazy(() => AdminUserCreateNestedOneWithoutBlastsInputSchema)
}).strict();

export const BlastUncheckedCreateInputSchema: z.ZodType<Prisma.BlastUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  authorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  messagesSent: z.lazy(() => MessageUncheckedCreateNestedManyWithoutBlastInputSchema).optional(),
  MailingListInBlast: z.lazy(() => MailingListInBlastUncheckedCreateNestedManyWithoutBlastInputSchema).optional()
}).strict();

export const BlastUpdateInputSchema: z.ZodType<Prisma.BlastUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  messagesSent: z.lazy(() => MessageUpdateManyWithoutBlastNestedInputSchema).optional(),
  MailingListInBlast: z.lazy(() => MailingListInBlastUpdateManyWithoutBlastNestedInputSchema).optional(),
  author: z.lazy(() => AdminUserUpdateOneRequiredWithoutBlastsNestedInputSchema).optional()
}).strict();

export const BlastUncheckedUpdateInputSchema: z.ZodType<Prisma.BlastUncheckedUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  authorId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  messagesSent: z.lazy(() => MessageUncheckedUpdateManyWithoutBlastNestedInputSchema).optional(),
  MailingListInBlast: z.lazy(() => MailingListInBlastUncheckedUpdateManyWithoutBlastNestedInputSchema).optional()
}).strict();

export const BlastCreateManyInputSchema: z.ZodType<Prisma.BlastCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  authorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BlastUpdateManyMutationInputSchema: z.ZodType<Prisma.BlastUpdateManyMutationInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const BlastUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BlastUncheckedUpdateManyInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  authorId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const PersonsInMailingListsCreateInputSchema: z.ZodType<Prisma.PersonsInMailingListsCreateInput> = z.object({
  id: z.string().cuid().optional(),
  person: z.lazy(() => PersonCreateNestedOneWithoutMailingListsInputSchema),
  mailingList: z.lazy(() => MailingListCreateNestedOneWithoutRecipientsInputSchema)
}).strict();

export const PersonsInMailingListsUncheckedCreateInputSchema: z.ZodType<Prisma.PersonsInMailingListsUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  personId: z.string(),
  mailingListId: z.string()
}).strict();

export const PersonsInMailingListsUpdateInputSchema: z.ZodType<Prisma.PersonsInMailingListsUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  person: z.lazy(() => PersonUpdateOneRequiredWithoutMailingListsNestedInputSchema).optional(),
  mailingList: z.lazy(() => MailingListUpdateOneRequiredWithoutRecipientsNestedInputSchema).optional()
}).strict();

export const PersonsInMailingListsUncheckedUpdateInputSchema: z.ZodType<Prisma.PersonsInMailingListsUncheckedUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  personId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  mailingListId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const PersonsInMailingListsCreateManyInputSchema: z.ZodType<Prisma.PersonsInMailingListsCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  personId: z.string(),
  mailingListId: z.string()
}).strict();

export const PersonsInMailingListsUpdateManyMutationInputSchema: z.ZodType<Prisma.PersonsInMailingListsUpdateManyMutationInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const PersonsInMailingListsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PersonsInMailingListsUncheckedUpdateManyInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  personId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  mailingListId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const MailingListInBlastCreateInputSchema: z.ZodType<Prisma.MailingListInBlastCreateInput> = z.object({
  id: z.string().cuid().optional(),
  mailingList: z.lazy(() => MailingListCreateNestedOneWithoutBlastsInputSchema),
  blast: z.lazy(() => BlastCreateNestedOneWithoutMailingListInBlastInputSchema)
}).strict();

export const MailingListInBlastUncheckedCreateInputSchema: z.ZodType<Prisma.MailingListInBlastUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  mailingListId: z.string(),
  blastId: z.string()
}).strict();

export const MailingListInBlastUpdateInputSchema: z.ZodType<Prisma.MailingListInBlastUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  mailingList: z.lazy(() => MailingListUpdateOneRequiredWithoutBlastsNestedInputSchema).optional(),
  blast: z.lazy(() => BlastUpdateOneRequiredWithoutMailingListInBlastNestedInputSchema).optional()
}).strict();

export const MailingListInBlastUncheckedUpdateInputSchema: z.ZodType<Prisma.MailingListInBlastUncheckedUpdateInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  mailingListId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  blastId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const MailingListInBlastCreateManyInputSchema: z.ZodType<Prisma.MailingListInBlastCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  mailingListId: z.string(),
  blastId: z.string()
}).strict();

export const MailingListInBlastUpdateManyMutationInputSchema: z.ZodType<Prisma.MailingListInBlastUpdateManyMutationInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const MailingListInBlastUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MailingListInBlastUncheckedUpdateManyInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  mailingListId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  blastId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional(),
}).strict();

export const BlastListRelationFilterSchema: z.ZodType<Prisma.BlastListRelationFilter> = z.object({
  every: z.lazy(() => BlastWhereInputSchema).optional(),
  some: z.lazy(() => BlastWhereInputSchema).optional(),
  none: z.lazy(() => BlastWhereInputSchema).optional()
}).strict();

export const BlastOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BlastOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AdminUserCountOrderByAggregateInputSchema: z.ZodType<Prisma.AdminUserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  clerkId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AdminUserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AdminUserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  clerkId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AdminUserMinOrderByAggregateInputSchema: z.ZodType<Prisma.AdminUserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  clerkId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const PersonsInMailingListsListRelationFilterSchema: z.ZodType<Prisma.PersonsInMailingListsListRelationFilter> = z.object({
  every: z.lazy(() => PersonsInMailingListsWhereInputSchema).optional(),
  some: z.lazy(() => PersonsInMailingListsWhereInputSchema).optional(),
  none: z.lazy(() => PersonsInMailingListsWhereInputSchema).optional()
}).strict();

export const MessageListRelationFilterSchema: z.ZodType<Prisma.MessageListRelationFilter> = z.object({
  every: z.lazy(() => MessageWhereInputSchema).optional(),
  some: z.lazy(() => MessageWhereInputSchema).optional(),
  none: z.lazy(() => MessageWhereInputSchema).optional()
}).strict();

export const PersonsInMailingListsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PersonsInMailingListsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MessageOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MessageOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PersonCountOrderByAggregateInputSchema: z.ZodType<Prisma.PersonCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PersonMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PersonMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PersonMinOrderByAggregateInputSchema: z.ZodType<Prisma.PersonMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MailingListInBlastListRelationFilterSchema: z.ZodType<Prisma.MailingListInBlastListRelationFilter> = z.object({
  every: z.lazy(() => MailingListInBlastWhereInputSchema).optional(),
  some: z.lazy(() => MailingListInBlastWhereInputSchema).optional(),
  none: z.lazy(() => MailingListInBlastWhereInputSchema).optional()
}).strict();

export const MailingListInBlastOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MailingListInBlastOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MailingListCountOrderByAggregateInputSchema: z.ZodType<Prisma.MailingListCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MailingListMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MailingListMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MailingListMinOrderByAggregateInputSchema: z.ZodType<Prisma.MailingListMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)]).optional(),
}).strict();

export const PersonRelationFilterSchema: z.ZodType<Prisma.PersonRelationFilter> = z.object({
  is: z.lazy(() => PersonWhereInputSchema).optional(),
  isNot: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export const BlastRelationFilterSchema: z.ZodType<Prisma.BlastRelationFilter> = z.object({
  is: z.lazy(() => BlastWhereInputSchema).optional(),
  isNot: z.lazy(() => BlastWhereInputSchema).optional()
}).strict();

export const MessageCountOrderByAggregateInputSchema: z.ZodType<Prisma.MessageCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  recipientId: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  delivered: z.lazy(() => SortOrderSchema).optional(),
  sentTime: z.lazy(() => SortOrderSchema).optional(),
  blastId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MessageMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MessageMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  recipientId: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  delivered: z.lazy(() => SortOrderSchema).optional(),
  sentTime: z.lazy(() => SortOrderSchema).optional(),
  blastId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MessageMinOrderByAggregateInputSchema: z.ZodType<Prisma.MessageMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  recipientId: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  delivered: z.lazy(() => SortOrderSchema).optional(),
  sentTime: z.lazy(() => SortOrderSchema).optional(),
  blastId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const AdminUserRelationFilterSchema: z.ZodType<Prisma.AdminUserRelationFilter> = z.object({
  is: z.lazy(() => AdminUserWhereInputSchema).optional(),
  isNot: z.lazy(() => AdminUserWhereInputSchema).optional()
}).strict();

export const BlastCountOrderByAggregateInputSchema: z.ZodType<Prisma.BlastCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BlastMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BlastMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BlastMinOrderByAggregateInputSchema: z.ZodType<Prisma.BlastMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MailingListRelationFilterSchema: z.ZodType<Prisma.MailingListRelationFilter> = z.object({
  is: z.lazy(() => MailingListWhereInputSchema).optional(),
  isNot: z.lazy(() => MailingListWhereInputSchema).optional()
}).strict();

export const PersonsInMailingListsPersonIdMailingListIdCompoundUniqueInputSchema: z.ZodType<Prisma.PersonsInMailingListsPersonIdMailingListIdCompoundUniqueInput> = z.object({
  personId: z.string(),
  mailingListId: z.string()
}).strict();

export const PersonsInMailingListsCountOrderByAggregateInputSchema: z.ZodType<Prisma.PersonsInMailingListsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  mailingListId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PersonsInMailingListsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PersonsInMailingListsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  mailingListId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PersonsInMailingListsMinOrderByAggregateInputSchema: z.ZodType<Prisma.PersonsInMailingListsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  mailingListId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MailingListInBlastMailingListIdBlastIdCompoundUniqueInputSchema: z.ZodType<Prisma.MailingListInBlastMailingListIdBlastIdCompoundUniqueInput> = z.object({
  mailingListId: z.string(),
  blastId: z.string()
}).strict();

export const MailingListInBlastCountOrderByAggregateInputSchema: z.ZodType<Prisma.MailingListInBlastCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  mailingListId: z.lazy(() => SortOrderSchema).optional(),
  blastId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MailingListInBlastMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MailingListInBlastMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  mailingListId: z.lazy(() => SortOrderSchema).optional(),
  blastId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MailingListInBlastMinOrderByAggregateInputSchema: z.ZodType<Prisma.MailingListInBlastMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  mailingListId: z.lazy(() => SortOrderSchema).optional(),
  blastId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BlastCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.BlastCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([z.lazy(() => BlastCreateWithoutAuthorInputSchema), z.lazy(() => BlastCreateWithoutAuthorInputSchema).array(), z.lazy(() => BlastUncheckedCreateWithoutAuthorInputSchema), z.lazy(() => BlastUncheckedCreateWithoutAuthorInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BlastCreateOrConnectWithoutAuthorInputSchema), z.lazy(() => BlastCreateOrConnectWithoutAuthorInputSchema).array()]).optional(),
  createMany: z.lazy(() => BlastCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => BlastWhereUniqueInputSchema), z.lazy(() => BlastWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const BlastUncheckedCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.BlastUncheckedCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([z.lazy(() => BlastCreateWithoutAuthorInputSchema), z.lazy(() => BlastCreateWithoutAuthorInputSchema).array(), z.lazy(() => BlastUncheckedCreateWithoutAuthorInputSchema), z.lazy(() => BlastUncheckedCreateWithoutAuthorInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BlastCreateOrConnectWithoutAuthorInputSchema), z.lazy(() => BlastCreateOrConnectWithoutAuthorInputSchema).array()]).optional(),
  createMany: z.lazy(() => BlastCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => BlastWhereUniqueInputSchema), z.lazy(() => BlastWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const BlastUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.BlastUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([z.lazy(() => BlastCreateWithoutAuthorInputSchema), z.lazy(() => BlastCreateWithoutAuthorInputSchema).array(), z.lazy(() => BlastUncheckedCreateWithoutAuthorInputSchema), z.lazy(() => BlastUncheckedCreateWithoutAuthorInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BlastCreateOrConnectWithoutAuthorInputSchema), z.lazy(() => BlastCreateOrConnectWithoutAuthorInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BlastUpsertWithWhereUniqueWithoutAuthorInputSchema), z.lazy(() => BlastUpsertWithWhereUniqueWithoutAuthorInputSchema).array()]).optional(),
  createMany: z.lazy(() => BlastCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => BlastWhereUniqueInputSchema), z.lazy(() => BlastWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BlastWhereUniqueInputSchema), z.lazy(() => BlastWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BlastWhereUniqueInputSchema), z.lazy(() => BlastWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BlastWhereUniqueInputSchema), z.lazy(() => BlastWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => BlastUpdateWithWhereUniqueWithoutAuthorInputSchema), z.lazy(() => BlastUpdateWithWhereUniqueWithoutAuthorInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BlastUpdateManyWithWhereWithoutAuthorInputSchema), z.lazy(() => BlastUpdateManyWithWhereWithoutAuthorInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BlastScalarWhereInputSchema), z.lazy(() => BlastScalarWhereInputSchema).array()]).optional(),
}).strict();

export const BlastUncheckedUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.BlastUncheckedUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([z.lazy(() => BlastCreateWithoutAuthorInputSchema), z.lazy(() => BlastCreateWithoutAuthorInputSchema).array(), z.lazy(() => BlastUncheckedCreateWithoutAuthorInputSchema), z.lazy(() => BlastUncheckedCreateWithoutAuthorInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BlastCreateOrConnectWithoutAuthorInputSchema), z.lazy(() => BlastCreateOrConnectWithoutAuthorInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BlastUpsertWithWhereUniqueWithoutAuthorInputSchema), z.lazy(() => BlastUpsertWithWhereUniqueWithoutAuthorInputSchema).array()]).optional(),
  createMany: z.lazy(() => BlastCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => BlastWhereUniqueInputSchema), z.lazy(() => BlastWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BlastWhereUniqueInputSchema), z.lazy(() => BlastWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BlastWhereUniqueInputSchema), z.lazy(() => BlastWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BlastWhereUniqueInputSchema), z.lazy(() => BlastWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => BlastUpdateWithWhereUniqueWithoutAuthorInputSchema), z.lazy(() => BlastUpdateWithWhereUniqueWithoutAuthorInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BlastUpdateManyWithWhereWithoutAuthorInputSchema), z.lazy(() => BlastUpdateManyWithWhereWithoutAuthorInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BlastScalarWhereInputSchema), z.lazy(() => BlastScalarWhereInputSchema).array()]).optional(),
}).strict();

export const PersonsInMailingListsCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.PersonsInMailingListsCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([z.lazy(() => PersonsInMailingListsCreateWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsCreateWithoutPersonInputSchema).array(), z.lazy(() => PersonsInMailingListsUncheckedCreateWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsUncheckedCreateWithoutPersonInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PersonsInMailingListsCreateOrConnectWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsCreateOrConnectWithoutPersonInputSchema).array()]).optional(),
  createMany: z.lazy(() => PersonsInMailingListsCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema), z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const MessageCreateNestedManyWithoutRecipientInputSchema: z.ZodType<Prisma.MessageCreateNestedManyWithoutRecipientInput> = z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutRecipientInputSchema), z.lazy(() => MessageCreateWithoutRecipientInputSchema).array(), z.lazy(() => MessageUncheckedCreateWithoutRecipientInputSchema), z.lazy(() => MessageUncheckedCreateWithoutRecipientInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageCreateOrConnectWithoutRecipientInputSchema), z.lazy(() => MessageCreateOrConnectWithoutRecipientInputSchema).array()]).optional(),
  createMany: z.lazy(() => MessageCreateManyRecipientInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => MessageWhereUniqueInputSchema), z.lazy(() => MessageWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const PersonsInMailingListsUncheckedCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.PersonsInMailingListsUncheckedCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([z.lazy(() => PersonsInMailingListsCreateWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsCreateWithoutPersonInputSchema).array(), z.lazy(() => PersonsInMailingListsUncheckedCreateWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsUncheckedCreateWithoutPersonInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PersonsInMailingListsCreateOrConnectWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsCreateOrConnectWithoutPersonInputSchema).array()]).optional(),
  createMany: z.lazy(() => PersonsInMailingListsCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema), z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const MessageUncheckedCreateNestedManyWithoutRecipientInputSchema: z.ZodType<Prisma.MessageUncheckedCreateNestedManyWithoutRecipientInput> = z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutRecipientInputSchema), z.lazy(() => MessageCreateWithoutRecipientInputSchema).array(), z.lazy(() => MessageUncheckedCreateWithoutRecipientInputSchema), z.lazy(() => MessageUncheckedCreateWithoutRecipientInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageCreateOrConnectWithoutRecipientInputSchema), z.lazy(() => MessageCreateOrConnectWithoutRecipientInputSchema).array()]).optional(),
  createMany: z.lazy(() => MessageCreateManyRecipientInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => MessageWhereUniqueInputSchema), z.lazy(() => MessageWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const PersonsInMailingListsUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.PersonsInMailingListsUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([z.lazy(() => PersonsInMailingListsCreateWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsCreateWithoutPersonInputSchema).array(), z.lazy(() => PersonsInMailingListsUncheckedCreateWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsUncheckedCreateWithoutPersonInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PersonsInMailingListsCreateOrConnectWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsCreateOrConnectWithoutPersonInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PersonsInMailingListsUpsertWithWhereUniqueWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsUpsertWithWhereUniqueWithoutPersonInputSchema).array()]).optional(),
  createMany: z.lazy(() => PersonsInMailingListsCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema), z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema), z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema), z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema), z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => PersonsInMailingListsUpdateWithWhereUniqueWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsUpdateWithWhereUniqueWithoutPersonInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PersonsInMailingListsUpdateManyWithWhereWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsUpdateManyWithWhereWithoutPersonInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PersonsInMailingListsScalarWhereInputSchema), z.lazy(() => PersonsInMailingListsScalarWhereInputSchema).array()]).optional(),
}).strict();

export const MessageUpdateManyWithoutRecipientNestedInputSchema: z.ZodType<Prisma.MessageUpdateManyWithoutRecipientNestedInput> = z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutRecipientInputSchema), z.lazy(() => MessageCreateWithoutRecipientInputSchema).array(), z.lazy(() => MessageUncheckedCreateWithoutRecipientInputSchema), z.lazy(() => MessageUncheckedCreateWithoutRecipientInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageCreateOrConnectWithoutRecipientInputSchema), z.lazy(() => MessageCreateOrConnectWithoutRecipientInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MessageUpsertWithWhereUniqueWithoutRecipientInputSchema), z.lazy(() => MessageUpsertWithWhereUniqueWithoutRecipientInputSchema).array()]).optional(),
  createMany: z.lazy(() => MessageCreateManyRecipientInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => MessageWhereUniqueInputSchema), z.lazy(() => MessageWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MessageWhereUniqueInputSchema), z.lazy(() => MessageWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MessageWhereUniqueInputSchema), z.lazy(() => MessageWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MessageWhereUniqueInputSchema), z.lazy(() => MessageWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => MessageUpdateWithWhereUniqueWithoutRecipientInputSchema), z.lazy(() => MessageUpdateWithWhereUniqueWithoutRecipientInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MessageUpdateManyWithWhereWithoutRecipientInputSchema), z.lazy(() => MessageUpdateManyWithWhereWithoutRecipientInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MessageScalarWhereInputSchema), z.lazy(() => MessageScalarWhereInputSchema).array()]).optional(),
}).strict();

export const PersonsInMailingListsUncheckedUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.PersonsInMailingListsUncheckedUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([z.lazy(() => PersonsInMailingListsCreateWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsCreateWithoutPersonInputSchema).array(), z.lazy(() => PersonsInMailingListsUncheckedCreateWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsUncheckedCreateWithoutPersonInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PersonsInMailingListsCreateOrConnectWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsCreateOrConnectWithoutPersonInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PersonsInMailingListsUpsertWithWhereUniqueWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsUpsertWithWhereUniqueWithoutPersonInputSchema).array()]).optional(),
  createMany: z.lazy(() => PersonsInMailingListsCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema), z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema), z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema), z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema), z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => PersonsInMailingListsUpdateWithWhereUniqueWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsUpdateWithWhereUniqueWithoutPersonInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PersonsInMailingListsUpdateManyWithWhereWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsUpdateManyWithWhereWithoutPersonInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PersonsInMailingListsScalarWhereInputSchema), z.lazy(() => PersonsInMailingListsScalarWhereInputSchema).array()]).optional(),
}).strict();

export const MessageUncheckedUpdateManyWithoutRecipientNestedInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutRecipientNestedInput> = z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutRecipientInputSchema), z.lazy(() => MessageCreateWithoutRecipientInputSchema).array(), z.lazy(() => MessageUncheckedCreateWithoutRecipientInputSchema), z.lazy(() => MessageUncheckedCreateWithoutRecipientInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageCreateOrConnectWithoutRecipientInputSchema), z.lazy(() => MessageCreateOrConnectWithoutRecipientInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MessageUpsertWithWhereUniqueWithoutRecipientInputSchema), z.lazy(() => MessageUpsertWithWhereUniqueWithoutRecipientInputSchema).array()]).optional(),
  createMany: z.lazy(() => MessageCreateManyRecipientInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => MessageWhereUniqueInputSchema), z.lazy(() => MessageWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MessageWhereUniqueInputSchema), z.lazy(() => MessageWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MessageWhereUniqueInputSchema), z.lazy(() => MessageWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MessageWhereUniqueInputSchema), z.lazy(() => MessageWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => MessageUpdateWithWhereUniqueWithoutRecipientInputSchema), z.lazy(() => MessageUpdateWithWhereUniqueWithoutRecipientInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MessageUpdateManyWithWhereWithoutRecipientInputSchema), z.lazy(() => MessageUpdateManyWithWhereWithoutRecipientInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MessageScalarWhereInputSchema), z.lazy(() => MessageScalarWhereInputSchema).array()]).optional(),
}).strict();

export const PersonsInMailingListsCreateNestedManyWithoutMailingListInputSchema: z.ZodType<Prisma.PersonsInMailingListsCreateNestedManyWithoutMailingListInput> = z.object({
  create: z.union([z.lazy(() => PersonsInMailingListsCreateWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsCreateWithoutMailingListInputSchema).array(), z.lazy(() => PersonsInMailingListsUncheckedCreateWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsUncheckedCreateWithoutMailingListInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PersonsInMailingListsCreateOrConnectWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsCreateOrConnectWithoutMailingListInputSchema).array()]).optional(),
  createMany: z.lazy(() => PersonsInMailingListsCreateManyMailingListInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema), z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const MailingListInBlastCreateNestedManyWithoutMailingListInputSchema: z.ZodType<Prisma.MailingListInBlastCreateNestedManyWithoutMailingListInput> = z.object({
  create: z.union([z.lazy(() => MailingListInBlastCreateWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastCreateWithoutMailingListInputSchema).array(), z.lazy(() => MailingListInBlastUncheckedCreateWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastUncheckedCreateWithoutMailingListInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MailingListInBlastCreateOrConnectWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastCreateOrConnectWithoutMailingListInputSchema).array()]).optional(),
  createMany: z.lazy(() => MailingListInBlastCreateManyMailingListInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => MailingListInBlastWhereUniqueInputSchema), z.lazy(() => MailingListInBlastWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const PersonsInMailingListsUncheckedCreateNestedManyWithoutMailingListInputSchema: z.ZodType<Prisma.PersonsInMailingListsUncheckedCreateNestedManyWithoutMailingListInput> = z.object({
  create: z.union([z.lazy(() => PersonsInMailingListsCreateWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsCreateWithoutMailingListInputSchema).array(), z.lazy(() => PersonsInMailingListsUncheckedCreateWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsUncheckedCreateWithoutMailingListInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PersonsInMailingListsCreateOrConnectWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsCreateOrConnectWithoutMailingListInputSchema).array()]).optional(),
  createMany: z.lazy(() => PersonsInMailingListsCreateManyMailingListInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema), z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const MailingListInBlastUncheckedCreateNestedManyWithoutMailingListInputSchema: z.ZodType<Prisma.MailingListInBlastUncheckedCreateNestedManyWithoutMailingListInput> = z.object({
  create: z.union([z.lazy(() => MailingListInBlastCreateWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastCreateWithoutMailingListInputSchema).array(), z.lazy(() => MailingListInBlastUncheckedCreateWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastUncheckedCreateWithoutMailingListInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MailingListInBlastCreateOrConnectWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastCreateOrConnectWithoutMailingListInputSchema).array()]).optional(),
  createMany: z.lazy(() => MailingListInBlastCreateManyMailingListInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => MailingListInBlastWhereUniqueInputSchema), z.lazy(() => MailingListInBlastWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const PersonsInMailingListsUpdateManyWithoutMailingListNestedInputSchema: z.ZodType<Prisma.PersonsInMailingListsUpdateManyWithoutMailingListNestedInput> = z.object({
  create: z.union([z.lazy(() => PersonsInMailingListsCreateWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsCreateWithoutMailingListInputSchema).array(), z.lazy(() => PersonsInMailingListsUncheckedCreateWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsUncheckedCreateWithoutMailingListInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PersonsInMailingListsCreateOrConnectWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsCreateOrConnectWithoutMailingListInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PersonsInMailingListsUpsertWithWhereUniqueWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsUpsertWithWhereUniqueWithoutMailingListInputSchema).array()]).optional(),
  createMany: z.lazy(() => PersonsInMailingListsCreateManyMailingListInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema), z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema), z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema), z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema), z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => PersonsInMailingListsUpdateWithWhereUniqueWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsUpdateWithWhereUniqueWithoutMailingListInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PersonsInMailingListsUpdateManyWithWhereWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsUpdateManyWithWhereWithoutMailingListInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PersonsInMailingListsScalarWhereInputSchema), z.lazy(() => PersonsInMailingListsScalarWhereInputSchema).array()]).optional(),
}).strict();

export const MailingListInBlastUpdateManyWithoutMailingListNestedInputSchema: z.ZodType<Prisma.MailingListInBlastUpdateManyWithoutMailingListNestedInput> = z.object({
  create: z.union([z.lazy(() => MailingListInBlastCreateWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastCreateWithoutMailingListInputSchema).array(), z.lazy(() => MailingListInBlastUncheckedCreateWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastUncheckedCreateWithoutMailingListInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MailingListInBlastCreateOrConnectWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastCreateOrConnectWithoutMailingListInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MailingListInBlastUpsertWithWhereUniqueWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastUpsertWithWhereUniqueWithoutMailingListInputSchema).array()]).optional(),
  createMany: z.lazy(() => MailingListInBlastCreateManyMailingListInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => MailingListInBlastWhereUniqueInputSchema), z.lazy(() => MailingListInBlastWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MailingListInBlastWhereUniqueInputSchema), z.lazy(() => MailingListInBlastWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MailingListInBlastWhereUniqueInputSchema), z.lazy(() => MailingListInBlastWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MailingListInBlastWhereUniqueInputSchema), z.lazy(() => MailingListInBlastWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => MailingListInBlastUpdateWithWhereUniqueWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastUpdateWithWhereUniqueWithoutMailingListInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MailingListInBlastUpdateManyWithWhereWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastUpdateManyWithWhereWithoutMailingListInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MailingListInBlastScalarWhereInputSchema), z.lazy(() => MailingListInBlastScalarWhereInputSchema).array()]).optional(),
}).strict();

export const PersonsInMailingListsUncheckedUpdateManyWithoutMailingListNestedInputSchema: z.ZodType<Prisma.PersonsInMailingListsUncheckedUpdateManyWithoutMailingListNestedInput> = z.object({
  create: z.union([z.lazy(() => PersonsInMailingListsCreateWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsCreateWithoutMailingListInputSchema).array(), z.lazy(() => PersonsInMailingListsUncheckedCreateWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsUncheckedCreateWithoutMailingListInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PersonsInMailingListsCreateOrConnectWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsCreateOrConnectWithoutMailingListInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PersonsInMailingListsUpsertWithWhereUniqueWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsUpsertWithWhereUniqueWithoutMailingListInputSchema).array()]).optional(),
  createMany: z.lazy(() => PersonsInMailingListsCreateManyMailingListInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema), z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema), z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema), z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema), z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => PersonsInMailingListsUpdateWithWhereUniqueWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsUpdateWithWhereUniqueWithoutMailingListInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PersonsInMailingListsUpdateManyWithWhereWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsUpdateManyWithWhereWithoutMailingListInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PersonsInMailingListsScalarWhereInputSchema), z.lazy(() => PersonsInMailingListsScalarWhereInputSchema).array()]).optional(),
}).strict();

export const MailingListInBlastUncheckedUpdateManyWithoutMailingListNestedInputSchema: z.ZodType<Prisma.MailingListInBlastUncheckedUpdateManyWithoutMailingListNestedInput> = z.object({
  create: z.union([z.lazy(() => MailingListInBlastCreateWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastCreateWithoutMailingListInputSchema).array(), z.lazy(() => MailingListInBlastUncheckedCreateWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastUncheckedCreateWithoutMailingListInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MailingListInBlastCreateOrConnectWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastCreateOrConnectWithoutMailingListInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MailingListInBlastUpsertWithWhereUniqueWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastUpsertWithWhereUniqueWithoutMailingListInputSchema).array()]).optional(),
  createMany: z.lazy(() => MailingListInBlastCreateManyMailingListInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => MailingListInBlastWhereUniqueInputSchema), z.lazy(() => MailingListInBlastWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MailingListInBlastWhereUniqueInputSchema), z.lazy(() => MailingListInBlastWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MailingListInBlastWhereUniqueInputSchema), z.lazy(() => MailingListInBlastWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MailingListInBlastWhereUniqueInputSchema), z.lazy(() => MailingListInBlastWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => MailingListInBlastUpdateWithWhereUniqueWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastUpdateWithWhereUniqueWithoutMailingListInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MailingListInBlastUpdateManyWithWhereWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastUpdateManyWithWhereWithoutMailingListInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MailingListInBlastScalarWhereInputSchema), z.lazy(() => MailingListInBlastScalarWhereInputSchema).array()]).optional(),
}).strict();

export const PersonCreateNestedOneWithoutReceivedMessagesInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutReceivedMessagesInput> = z.object({
  create: z.union([z.lazy(() => PersonCreateWithoutReceivedMessagesInputSchema), z.lazy(() => PersonUncheckedCreateWithoutReceivedMessagesInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutReceivedMessagesInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export const BlastCreateNestedOneWithoutMessagesSentInputSchema: z.ZodType<Prisma.BlastCreateNestedOneWithoutMessagesSentInput> = z.object({
  create: z.union([z.lazy(() => BlastCreateWithoutMessagesSentInputSchema), z.lazy(() => BlastUncheckedCreateWithoutMessagesSentInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => BlastCreateOrConnectWithoutMessagesSentInputSchema).optional(),
  connect: z.lazy(() => BlastWhereUniqueInputSchema).optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const PersonUpdateOneRequiredWithoutReceivedMessagesNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutReceivedMessagesNestedInput> = z.object({
  create: z.union([z.lazy(() => PersonCreateWithoutReceivedMessagesInputSchema), z.lazy(() => PersonUncheckedCreateWithoutReceivedMessagesInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutReceivedMessagesInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutReceivedMessagesInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => PersonUpdateToOneWithWhereWithoutReceivedMessagesInputSchema), z.lazy(() => PersonUpdateWithoutReceivedMessagesInputSchema), z.lazy(() => PersonUncheckedUpdateWithoutReceivedMessagesInputSchema)]).optional(),
}).strict();

export const BlastUpdateOneRequiredWithoutMessagesSentNestedInputSchema: z.ZodType<Prisma.BlastUpdateOneRequiredWithoutMessagesSentNestedInput> = z.object({
  create: z.union([z.lazy(() => BlastCreateWithoutMessagesSentInputSchema), z.lazy(() => BlastUncheckedCreateWithoutMessagesSentInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => BlastCreateOrConnectWithoutMessagesSentInputSchema).optional(),
  upsert: z.lazy(() => BlastUpsertWithoutMessagesSentInputSchema).optional(),
  connect: z.lazy(() => BlastWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => BlastUpdateToOneWithWhereWithoutMessagesSentInputSchema), z.lazy(() => BlastUpdateWithoutMessagesSentInputSchema), z.lazy(() => BlastUncheckedUpdateWithoutMessagesSentInputSchema)]).optional(),
}).strict();

export const MessageCreateNestedManyWithoutBlastInputSchema: z.ZodType<Prisma.MessageCreateNestedManyWithoutBlastInput> = z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutBlastInputSchema), z.lazy(() => MessageCreateWithoutBlastInputSchema).array(), z.lazy(() => MessageUncheckedCreateWithoutBlastInputSchema), z.lazy(() => MessageUncheckedCreateWithoutBlastInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageCreateOrConnectWithoutBlastInputSchema), z.lazy(() => MessageCreateOrConnectWithoutBlastInputSchema).array()]).optional(),
  createMany: z.lazy(() => MessageCreateManyBlastInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => MessageWhereUniqueInputSchema), z.lazy(() => MessageWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const MailingListInBlastCreateNestedManyWithoutBlastInputSchema: z.ZodType<Prisma.MailingListInBlastCreateNestedManyWithoutBlastInput> = z.object({
  create: z.union([z.lazy(() => MailingListInBlastCreateWithoutBlastInputSchema), z.lazy(() => MailingListInBlastCreateWithoutBlastInputSchema).array(), z.lazy(() => MailingListInBlastUncheckedCreateWithoutBlastInputSchema), z.lazy(() => MailingListInBlastUncheckedCreateWithoutBlastInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MailingListInBlastCreateOrConnectWithoutBlastInputSchema), z.lazy(() => MailingListInBlastCreateOrConnectWithoutBlastInputSchema).array()]).optional(),
  createMany: z.lazy(() => MailingListInBlastCreateManyBlastInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => MailingListInBlastWhereUniqueInputSchema), z.lazy(() => MailingListInBlastWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const AdminUserCreateNestedOneWithoutBlastsInputSchema: z.ZodType<Prisma.AdminUserCreateNestedOneWithoutBlastsInput> = z.object({
  create: z.union([z.lazy(() => AdminUserCreateWithoutBlastsInputSchema), z.lazy(() => AdminUserUncheckedCreateWithoutBlastsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => AdminUserCreateOrConnectWithoutBlastsInputSchema).optional(),
  connect: z.lazy(() => AdminUserWhereUniqueInputSchema).optional()
}).strict();

export const MessageUncheckedCreateNestedManyWithoutBlastInputSchema: z.ZodType<Prisma.MessageUncheckedCreateNestedManyWithoutBlastInput> = z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutBlastInputSchema), z.lazy(() => MessageCreateWithoutBlastInputSchema).array(), z.lazy(() => MessageUncheckedCreateWithoutBlastInputSchema), z.lazy(() => MessageUncheckedCreateWithoutBlastInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageCreateOrConnectWithoutBlastInputSchema), z.lazy(() => MessageCreateOrConnectWithoutBlastInputSchema).array()]).optional(),
  createMany: z.lazy(() => MessageCreateManyBlastInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => MessageWhereUniqueInputSchema), z.lazy(() => MessageWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const MailingListInBlastUncheckedCreateNestedManyWithoutBlastInputSchema: z.ZodType<Prisma.MailingListInBlastUncheckedCreateNestedManyWithoutBlastInput> = z.object({
  create: z.union([z.lazy(() => MailingListInBlastCreateWithoutBlastInputSchema), z.lazy(() => MailingListInBlastCreateWithoutBlastInputSchema).array(), z.lazy(() => MailingListInBlastUncheckedCreateWithoutBlastInputSchema), z.lazy(() => MailingListInBlastUncheckedCreateWithoutBlastInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MailingListInBlastCreateOrConnectWithoutBlastInputSchema), z.lazy(() => MailingListInBlastCreateOrConnectWithoutBlastInputSchema).array()]).optional(),
  createMany: z.lazy(() => MailingListInBlastCreateManyBlastInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => MailingListInBlastWhereUniqueInputSchema), z.lazy(() => MailingListInBlastWhereUniqueInputSchema).array()]).optional(),
}).strict();

export const MessageUpdateManyWithoutBlastNestedInputSchema: z.ZodType<Prisma.MessageUpdateManyWithoutBlastNestedInput> = z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutBlastInputSchema), z.lazy(() => MessageCreateWithoutBlastInputSchema).array(), z.lazy(() => MessageUncheckedCreateWithoutBlastInputSchema), z.lazy(() => MessageUncheckedCreateWithoutBlastInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageCreateOrConnectWithoutBlastInputSchema), z.lazy(() => MessageCreateOrConnectWithoutBlastInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MessageUpsertWithWhereUniqueWithoutBlastInputSchema), z.lazy(() => MessageUpsertWithWhereUniqueWithoutBlastInputSchema).array()]).optional(),
  createMany: z.lazy(() => MessageCreateManyBlastInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => MessageWhereUniqueInputSchema), z.lazy(() => MessageWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MessageWhereUniqueInputSchema), z.lazy(() => MessageWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MessageWhereUniqueInputSchema), z.lazy(() => MessageWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MessageWhereUniqueInputSchema), z.lazy(() => MessageWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => MessageUpdateWithWhereUniqueWithoutBlastInputSchema), z.lazy(() => MessageUpdateWithWhereUniqueWithoutBlastInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MessageUpdateManyWithWhereWithoutBlastInputSchema), z.lazy(() => MessageUpdateManyWithWhereWithoutBlastInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MessageScalarWhereInputSchema), z.lazy(() => MessageScalarWhereInputSchema).array()]).optional(),
}).strict();

export const MailingListInBlastUpdateManyWithoutBlastNestedInputSchema: z.ZodType<Prisma.MailingListInBlastUpdateManyWithoutBlastNestedInput> = z.object({
  create: z.union([z.lazy(() => MailingListInBlastCreateWithoutBlastInputSchema), z.lazy(() => MailingListInBlastCreateWithoutBlastInputSchema).array(), z.lazy(() => MailingListInBlastUncheckedCreateWithoutBlastInputSchema), z.lazy(() => MailingListInBlastUncheckedCreateWithoutBlastInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MailingListInBlastCreateOrConnectWithoutBlastInputSchema), z.lazy(() => MailingListInBlastCreateOrConnectWithoutBlastInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MailingListInBlastUpsertWithWhereUniqueWithoutBlastInputSchema), z.lazy(() => MailingListInBlastUpsertWithWhereUniqueWithoutBlastInputSchema).array()]).optional(),
  createMany: z.lazy(() => MailingListInBlastCreateManyBlastInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => MailingListInBlastWhereUniqueInputSchema), z.lazy(() => MailingListInBlastWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MailingListInBlastWhereUniqueInputSchema), z.lazy(() => MailingListInBlastWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MailingListInBlastWhereUniqueInputSchema), z.lazy(() => MailingListInBlastWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MailingListInBlastWhereUniqueInputSchema), z.lazy(() => MailingListInBlastWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => MailingListInBlastUpdateWithWhereUniqueWithoutBlastInputSchema), z.lazy(() => MailingListInBlastUpdateWithWhereUniqueWithoutBlastInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MailingListInBlastUpdateManyWithWhereWithoutBlastInputSchema), z.lazy(() => MailingListInBlastUpdateManyWithWhereWithoutBlastInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MailingListInBlastScalarWhereInputSchema), z.lazy(() => MailingListInBlastScalarWhereInputSchema).array()]).optional(),
}).strict();

export const AdminUserUpdateOneRequiredWithoutBlastsNestedInputSchema: z.ZodType<Prisma.AdminUserUpdateOneRequiredWithoutBlastsNestedInput> = z.object({
  create: z.union([z.lazy(() => AdminUserCreateWithoutBlastsInputSchema), z.lazy(() => AdminUserUncheckedCreateWithoutBlastsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => AdminUserCreateOrConnectWithoutBlastsInputSchema).optional(),
  upsert: z.lazy(() => AdminUserUpsertWithoutBlastsInputSchema).optional(),
  connect: z.lazy(() => AdminUserWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => AdminUserUpdateToOneWithWhereWithoutBlastsInputSchema), z.lazy(() => AdminUserUpdateWithoutBlastsInputSchema), z.lazy(() => AdminUserUncheckedUpdateWithoutBlastsInputSchema)]).optional(),
}).strict();

export const MessageUncheckedUpdateManyWithoutBlastNestedInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutBlastNestedInput> = z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutBlastInputSchema), z.lazy(() => MessageCreateWithoutBlastInputSchema).array(), z.lazy(() => MessageUncheckedCreateWithoutBlastInputSchema), z.lazy(() => MessageUncheckedCreateWithoutBlastInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageCreateOrConnectWithoutBlastInputSchema), z.lazy(() => MessageCreateOrConnectWithoutBlastInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MessageUpsertWithWhereUniqueWithoutBlastInputSchema), z.lazy(() => MessageUpsertWithWhereUniqueWithoutBlastInputSchema).array()]).optional(),
  createMany: z.lazy(() => MessageCreateManyBlastInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => MessageWhereUniqueInputSchema), z.lazy(() => MessageWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MessageWhereUniqueInputSchema), z.lazy(() => MessageWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MessageWhereUniqueInputSchema), z.lazy(() => MessageWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MessageWhereUniqueInputSchema), z.lazy(() => MessageWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => MessageUpdateWithWhereUniqueWithoutBlastInputSchema), z.lazy(() => MessageUpdateWithWhereUniqueWithoutBlastInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MessageUpdateManyWithWhereWithoutBlastInputSchema), z.lazy(() => MessageUpdateManyWithWhereWithoutBlastInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MessageScalarWhereInputSchema), z.lazy(() => MessageScalarWhereInputSchema).array()]).optional(),
}).strict();

export const MailingListInBlastUncheckedUpdateManyWithoutBlastNestedInputSchema: z.ZodType<Prisma.MailingListInBlastUncheckedUpdateManyWithoutBlastNestedInput> = z.object({
  create: z.union([z.lazy(() => MailingListInBlastCreateWithoutBlastInputSchema), z.lazy(() => MailingListInBlastCreateWithoutBlastInputSchema).array(), z.lazy(() => MailingListInBlastUncheckedCreateWithoutBlastInputSchema), z.lazy(() => MailingListInBlastUncheckedCreateWithoutBlastInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MailingListInBlastCreateOrConnectWithoutBlastInputSchema), z.lazy(() => MailingListInBlastCreateOrConnectWithoutBlastInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MailingListInBlastUpsertWithWhereUniqueWithoutBlastInputSchema), z.lazy(() => MailingListInBlastUpsertWithWhereUniqueWithoutBlastInputSchema).array()]).optional(),
  createMany: z.lazy(() => MailingListInBlastCreateManyBlastInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => MailingListInBlastWhereUniqueInputSchema), z.lazy(() => MailingListInBlastWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MailingListInBlastWhereUniqueInputSchema), z.lazy(() => MailingListInBlastWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MailingListInBlastWhereUniqueInputSchema), z.lazy(() => MailingListInBlastWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MailingListInBlastWhereUniqueInputSchema), z.lazy(() => MailingListInBlastWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => MailingListInBlastUpdateWithWhereUniqueWithoutBlastInputSchema), z.lazy(() => MailingListInBlastUpdateWithWhereUniqueWithoutBlastInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MailingListInBlastUpdateManyWithWhereWithoutBlastInputSchema), z.lazy(() => MailingListInBlastUpdateManyWithWhereWithoutBlastInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MailingListInBlastScalarWhereInputSchema), z.lazy(() => MailingListInBlastScalarWhereInputSchema).array()]).optional(),
}).strict();

export const PersonCreateNestedOneWithoutMailingListsInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutMailingListsInput> = z.object({
  create: z.union([z.lazy(() => PersonCreateWithoutMailingListsInputSchema), z.lazy(() => PersonUncheckedCreateWithoutMailingListsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutMailingListsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export const MailingListCreateNestedOneWithoutRecipientsInputSchema: z.ZodType<Prisma.MailingListCreateNestedOneWithoutRecipientsInput> = z.object({
  create: z.union([z.lazy(() => MailingListCreateWithoutRecipientsInputSchema), z.lazy(() => MailingListUncheckedCreateWithoutRecipientsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => MailingListCreateOrConnectWithoutRecipientsInputSchema).optional(),
  connect: z.lazy(() => MailingListWhereUniqueInputSchema).optional()
}).strict();

export const PersonUpdateOneRequiredWithoutMailingListsNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutMailingListsNestedInput> = z.object({
  create: z.union([z.lazy(() => PersonCreateWithoutMailingListsInputSchema), z.lazy(() => PersonUncheckedCreateWithoutMailingListsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutMailingListsInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutMailingListsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => PersonUpdateToOneWithWhereWithoutMailingListsInputSchema), z.lazy(() => PersonUpdateWithoutMailingListsInputSchema), z.lazy(() => PersonUncheckedUpdateWithoutMailingListsInputSchema)]).optional(),
}).strict();

export const MailingListUpdateOneRequiredWithoutRecipientsNestedInputSchema: z.ZodType<Prisma.MailingListUpdateOneRequiredWithoutRecipientsNestedInput> = z.object({
  create: z.union([z.lazy(() => MailingListCreateWithoutRecipientsInputSchema), z.lazy(() => MailingListUncheckedCreateWithoutRecipientsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => MailingListCreateOrConnectWithoutRecipientsInputSchema).optional(),
  upsert: z.lazy(() => MailingListUpsertWithoutRecipientsInputSchema).optional(),
  connect: z.lazy(() => MailingListWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => MailingListUpdateToOneWithWhereWithoutRecipientsInputSchema), z.lazy(() => MailingListUpdateWithoutRecipientsInputSchema), z.lazy(() => MailingListUncheckedUpdateWithoutRecipientsInputSchema)]).optional(),
}).strict();

export const MailingListCreateNestedOneWithoutBlastsInputSchema: z.ZodType<Prisma.MailingListCreateNestedOneWithoutBlastsInput> = z.object({
  create: z.union([z.lazy(() => MailingListCreateWithoutBlastsInputSchema), z.lazy(() => MailingListUncheckedCreateWithoutBlastsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => MailingListCreateOrConnectWithoutBlastsInputSchema).optional(),
  connect: z.lazy(() => MailingListWhereUniqueInputSchema).optional()
}).strict();

export const BlastCreateNestedOneWithoutMailingListInBlastInputSchema: z.ZodType<Prisma.BlastCreateNestedOneWithoutMailingListInBlastInput> = z.object({
  create: z.union([z.lazy(() => BlastCreateWithoutMailingListInBlastInputSchema), z.lazy(() => BlastUncheckedCreateWithoutMailingListInBlastInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => BlastCreateOrConnectWithoutMailingListInBlastInputSchema).optional(),
  connect: z.lazy(() => BlastWhereUniqueInputSchema).optional()
}).strict();

export const MailingListUpdateOneRequiredWithoutBlastsNestedInputSchema: z.ZodType<Prisma.MailingListUpdateOneRequiredWithoutBlastsNestedInput> = z.object({
  create: z.union([z.lazy(() => MailingListCreateWithoutBlastsInputSchema), z.lazy(() => MailingListUncheckedCreateWithoutBlastsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => MailingListCreateOrConnectWithoutBlastsInputSchema).optional(),
  upsert: z.lazy(() => MailingListUpsertWithoutBlastsInputSchema).optional(),
  connect: z.lazy(() => MailingListWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => MailingListUpdateToOneWithWhereWithoutBlastsInputSchema), z.lazy(() => MailingListUpdateWithoutBlastsInputSchema), z.lazy(() => MailingListUncheckedUpdateWithoutBlastsInputSchema)]).optional(),
}).strict();

export const BlastUpdateOneRequiredWithoutMailingListInBlastNestedInputSchema: z.ZodType<Prisma.BlastUpdateOneRequiredWithoutMailingListInBlastNestedInput> = z.object({
  create: z.union([z.lazy(() => BlastCreateWithoutMailingListInBlastInputSchema), z.lazy(() => BlastUncheckedCreateWithoutMailingListInBlastInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => BlastCreateOrConnectWithoutMailingListInBlastInputSchema).optional(),
  upsert: z.lazy(() => BlastUpsertWithoutMailingListInBlastInputSchema).optional(),
  connect: z.lazy(() => BlastWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => BlastUpdateToOneWithWhereWithoutMailingListInBlastInputSchema), z.lazy(() => BlastUpdateWithoutMailingListInBlastInputSchema), z.lazy(() => BlastUncheckedUpdateWithoutMailingListInBlastInputSchema)]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)]).optional(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const BlastCreateWithoutAuthorInputSchema: z.ZodType<Prisma.BlastCreateWithoutAuthorInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  messagesSent: z.lazy(() => MessageCreateNestedManyWithoutBlastInputSchema).optional(),
  MailingListInBlast: z.lazy(() => MailingListInBlastCreateNestedManyWithoutBlastInputSchema).optional()
}).strict();

export const BlastUncheckedCreateWithoutAuthorInputSchema: z.ZodType<Prisma.BlastUncheckedCreateWithoutAuthorInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  messagesSent: z.lazy(() => MessageUncheckedCreateNestedManyWithoutBlastInputSchema).optional(),
  MailingListInBlast: z.lazy(() => MailingListInBlastUncheckedCreateNestedManyWithoutBlastInputSchema).optional()
}).strict();

export const BlastCreateOrConnectWithoutAuthorInputSchema: z.ZodType<Prisma.BlastCreateOrConnectWithoutAuthorInput> = z.object({
  where: z.lazy(() => BlastWhereUniqueInputSchema),
  create: z.union([z.lazy(() => BlastCreateWithoutAuthorInputSchema), z.lazy(() => BlastUncheckedCreateWithoutAuthorInputSchema)]),
}).strict();

export const BlastCreateManyAuthorInputEnvelopeSchema: z.ZodType<Prisma.BlastCreateManyAuthorInputEnvelope> = z.object({
  data: z.union([z.lazy(() => BlastCreateManyAuthorInputSchema), z.lazy(() => BlastCreateManyAuthorInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const BlastUpsertWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.BlastUpsertWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => BlastWhereUniqueInputSchema),
  update: z.union([z.lazy(() => BlastUpdateWithoutAuthorInputSchema), z.lazy(() => BlastUncheckedUpdateWithoutAuthorInputSchema)]),
  create: z.union([z.lazy(() => BlastCreateWithoutAuthorInputSchema), z.lazy(() => BlastUncheckedCreateWithoutAuthorInputSchema)]),
}).strict();

export const BlastUpdateWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.BlastUpdateWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => BlastWhereUniqueInputSchema),
  data: z.union([z.lazy(() => BlastUpdateWithoutAuthorInputSchema), z.lazy(() => BlastUncheckedUpdateWithoutAuthorInputSchema)]),
}).strict();

export const BlastUpdateManyWithWhereWithoutAuthorInputSchema: z.ZodType<Prisma.BlastUpdateManyWithWhereWithoutAuthorInput> = z.object({
  where: z.lazy(() => BlastScalarWhereInputSchema),
  data: z.union([z.lazy(() => BlastUpdateManyMutationInputSchema), z.lazy(() => BlastUncheckedUpdateManyWithoutAuthorInputSchema)]),
}).strict();

export const BlastScalarWhereInputSchema: z.ZodType<Prisma.BlastScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => BlastScalarWhereInputSchema), z.lazy(() => BlastScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => BlastScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => BlastScalarWhereInputSchema), z.lazy(() => BlastScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  authorId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
}).strict();

export const PersonsInMailingListsCreateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsInMailingListsCreateWithoutPersonInput> = z.object({
  id: z.string().cuid().optional(),
  mailingList: z.lazy(() => MailingListCreateNestedOneWithoutRecipientsInputSchema)
}).strict();

export const PersonsInMailingListsUncheckedCreateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsInMailingListsUncheckedCreateWithoutPersonInput> = z.object({
  id: z.string().cuid().optional(),
  mailingListId: z.string()
}).strict();

export const PersonsInMailingListsCreateOrConnectWithoutPersonInputSchema: z.ZodType<Prisma.PersonsInMailingListsCreateOrConnectWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema),
  create: z.union([z.lazy(() => PersonsInMailingListsCreateWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsUncheckedCreateWithoutPersonInputSchema)]),
}).strict();

export const PersonsInMailingListsCreateManyPersonInputEnvelopeSchema: z.ZodType<Prisma.PersonsInMailingListsCreateManyPersonInputEnvelope> = z.object({
  data: z.union([z.lazy(() => PersonsInMailingListsCreateManyPersonInputSchema), z.lazy(() => PersonsInMailingListsCreateManyPersonInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const MessageCreateWithoutRecipientInputSchema: z.ZodType<Prisma.MessageCreateWithoutRecipientInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  delivered: z.boolean().optional(),
  sentTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  blast: z.lazy(() => BlastCreateNestedOneWithoutMessagesSentInputSchema)
}).strict();

export const MessageUncheckedCreateWithoutRecipientInputSchema: z.ZodType<Prisma.MessageUncheckedCreateWithoutRecipientInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  delivered: z.boolean().optional(),
  sentTime: z.coerce.date(),
  blastId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MessageCreateOrConnectWithoutRecipientInputSchema: z.ZodType<Prisma.MessageCreateOrConnectWithoutRecipientInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  create: z.union([z.lazy(() => MessageCreateWithoutRecipientInputSchema), z.lazy(() => MessageUncheckedCreateWithoutRecipientInputSchema)]),
}).strict();

export const MessageCreateManyRecipientInputEnvelopeSchema: z.ZodType<Prisma.MessageCreateManyRecipientInputEnvelope> = z.object({
  data: z.union([z.lazy(() => MessageCreateManyRecipientInputSchema), z.lazy(() => MessageCreateManyRecipientInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PersonsInMailingListsUpsertWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.PersonsInMailingListsUpsertWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema),
  update: z.union([z.lazy(() => PersonsInMailingListsUpdateWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsUncheckedUpdateWithoutPersonInputSchema)]),
  create: z.union([z.lazy(() => PersonsInMailingListsCreateWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsUncheckedCreateWithoutPersonInputSchema)]),
}).strict();

export const PersonsInMailingListsUpdateWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.PersonsInMailingListsUpdateWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema),
  data: z.union([z.lazy(() => PersonsInMailingListsUpdateWithoutPersonInputSchema), z.lazy(() => PersonsInMailingListsUncheckedUpdateWithoutPersonInputSchema)]),
}).strict();

export const PersonsInMailingListsUpdateManyWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.PersonsInMailingListsUpdateManyWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsInMailingListsScalarWhereInputSchema),
  data: z.union([z.lazy(() => PersonsInMailingListsUpdateManyMutationInputSchema), z.lazy(() => PersonsInMailingListsUncheckedUpdateManyWithoutPersonInputSchema)]),
}).strict();

export const PersonsInMailingListsScalarWhereInputSchema: z.ZodType<Prisma.PersonsInMailingListsScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => PersonsInMailingListsScalarWhereInputSchema), z.lazy(() => PersonsInMailingListsScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => PersonsInMailingListsScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => PersonsInMailingListsScalarWhereInputSchema), z.lazy(() => PersonsInMailingListsScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  personId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  mailingListId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
}).strict();

export const MessageUpsertWithWhereUniqueWithoutRecipientInputSchema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutRecipientInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  update: z.union([z.lazy(() => MessageUpdateWithoutRecipientInputSchema), z.lazy(() => MessageUncheckedUpdateWithoutRecipientInputSchema)]),
  create: z.union([z.lazy(() => MessageCreateWithoutRecipientInputSchema), z.lazy(() => MessageUncheckedCreateWithoutRecipientInputSchema)]),
}).strict();

export const MessageUpdateWithWhereUniqueWithoutRecipientInputSchema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutRecipientInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  data: z.union([z.lazy(() => MessageUpdateWithoutRecipientInputSchema), z.lazy(() => MessageUncheckedUpdateWithoutRecipientInputSchema)]),
}).strict();

export const MessageUpdateManyWithWhereWithoutRecipientInputSchema: z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutRecipientInput> = z.object({
  where: z.lazy(() => MessageScalarWhereInputSchema),
  data: z.union([z.lazy(() => MessageUpdateManyMutationInputSchema), z.lazy(() => MessageUncheckedUpdateManyWithoutRecipientInputSchema)]),
}).strict();

export const MessageScalarWhereInputSchema: z.ZodType<Prisma.MessageScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => MessageScalarWhereInputSchema), z.lazy(() => MessageScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => MessageScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => MessageScalarWhereInputSchema), z.lazy(() => MessageScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  recipientId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  delivered: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
  sentTime: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  blastId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
}).strict();

export const PersonsInMailingListsCreateWithoutMailingListInputSchema: z.ZodType<Prisma.PersonsInMailingListsCreateWithoutMailingListInput> = z.object({
  id: z.string().cuid().optional(),
  person: z.lazy(() => PersonCreateNestedOneWithoutMailingListsInputSchema)
}).strict();

export const PersonsInMailingListsUncheckedCreateWithoutMailingListInputSchema: z.ZodType<Prisma.PersonsInMailingListsUncheckedCreateWithoutMailingListInput> = z.object({
  id: z.string().cuid().optional(),
  personId: z.string()
}).strict();

export const PersonsInMailingListsCreateOrConnectWithoutMailingListInputSchema: z.ZodType<Prisma.PersonsInMailingListsCreateOrConnectWithoutMailingListInput> = z.object({
  where: z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema),
  create: z.union([z.lazy(() => PersonsInMailingListsCreateWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsUncheckedCreateWithoutMailingListInputSchema)]),
}).strict();

export const PersonsInMailingListsCreateManyMailingListInputEnvelopeSchema: z.ZodType<Prisma.PersonsInMailingListsCreateManyMailingListInputEnvelope> = z.object({
  data: z.union([z.lazy(() => PersonsInMailingListsCreateManyMailingListInputSchema), z.lazy(() => PersonsInMailingListsCreateManyMailingListInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const MailingListInBlastCreateWithoutMailingListInputSchema: z.ZodType<Prisma.MailingListInBlastCreateWithoutMailingListInput> = z.object({
  id: z.string().cuid().optional(),
  blast: z.lazy(() => BlastCreateNestedOneWithoutMailingListInBlastInputSchema)
}).strict();

export const MailingListInBlastUncheckedCreateWithoutMailingListInputSchema: z.ZodType<Prisma.MailingListInBlastUncheckedCreateWithoutMailingListInput> = z.object({
  id: z.string().cuid().optional(),
  blastId: z.string()
}).strict();

export const MailingListInBlastCreateOrConnectWithoutMailingListInputSchema: z.ZodType<Prisma.MailingListInBlastCreateOrConnectWithoutMailingListInput> = z.object({
  where: z.lazy(() => MailingListInBlastWhereUniqueInputSchema),
  create: z.union([z.lazy(() => MailingListInBlastCreateWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastUncheckedCreateWithoutMailingListInputSchema)]),
}).strict();

export const MailingListInBlastCreateManyMailingListInputEnvelopeSchema: z.ZodType<Prisma.MailingListInBlastCreateManyMailingListInputEnvelope> = z.object({
  data: z.union([z.lazy(() => MailingListInBlastCreateManyMailingListInputSchema), z.lazy(() => MailingListInBlastCreateManyMailingListInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PersonsInMailingListsUpsertWithWhereUniqueWithoutMailingListInputSchema: z.ZodType<Prisma.PersonsInMailingListsUpsertWithWhereUniqueWithoutMailingListInput> = z.object({
  where: z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema),
  update: z.union([z.lazy(() => PersonsInMailingListsUpdateWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsUncheckedUpdateWithoutMailingListInputSchema)]),
  create: z.union([z.lazy(() => PersonsInMailingListsCreateWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsUncheckedCreateWithoutMailingListInputSchema)]),
}).strict();

export const PersonsInMailingListsUpdateWithWhereUniqueWithoutMailingListInputSchema: z.ZodType<Prisma.PersonsInMailingListsUpdateWithWhereUniqueWithoutMailingListInput> = z.object({
  where: z.lazy(() => PersonsInMailingListsWhereUniqueInputSchema),
  data: z.union([z.lazy(() => PersonsInMailingListsUpdateWithoutMailingListInputSchema), z.lazy(() => PersonsInMailingListsUncheckedUpdateWithoutMailingListInputSchema)]),
}).strict();

export const PersonsInMailingListsUpdateManyWithWhereWithoutMailingListInputSchema: z.ZodType<Prisma.PersonsInMailingListsUpdateManyWithWhereWithoutMailingListInput> = z.object({
  where: z.lazy(() => PersonsInMailingListsScalarWhereInputSchema),
  data: z.union([z.lazy(() => PersonsInMailingListsUpdateManyMutationInputSchema), z.lazy(() => PersonsInMailingListsUncheckedUpdateManyWithoutMailingListInputSchema)]),
}).strict();

export const MailingListInBlastUpsertWithWhereUniqueWithoutMailingListInputSchema: z.ZodType<Prisma.MailingListInBlastUpsertWithWhereUniqueWithoutMailingListInput> = z.object({
  where: z.lazy(() => MailingListInBlastWhereUniqueInputSchema),
  update: z.union([z.lazy(() => MailingListInBlastUpdateWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastUncheckedUpdateWithoutMailingListInputSchema)]),
  create: z.union([z.lazy(() => MailingListInBlastCreateWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastUncheckedCreateWithoutMailingListInputSchema)]),
}).strict();

export const MailingListInBlastUpdateWithWhereUniqueWithoutMailingListInputSchema: z.ZodType<Prisma.MailingListInBlastUpdateWithWhereUniqueWithoutMailingListInput> = z.object({
  where: z.lazy(() => MailingListInBlastWhereUniqueInputSchema),
  data: z.union([z.lazy(() => MailingListInBlastUpdateWithoutMailingListInputSchema), z.lazy(() => MailingListInBlastUncheckedUpdateWithoutMailingListInputSchema)]),
}).strict();

export const MailingListInBlastUpdateManyWithWhereWithoutMailingListInputSchema: z.ZodType<Prisma.MailingListInBlastUpdateManyWithWhereWithoutMailingListInput> = z.object({
  where: z.lazy(() => MailingListInBlastScalarWhereInputSchema),
  data: z.union([z.lazy(() => MailingListInBlastUpdateManyMutationInputSchema), z.lazy(() => MailingListInBlastUncheckedUpdateManyWithoutMailingListInputSchema)]),
}).strict();

export const MailingListInBlastScalarWhereInputSchema: z.ZodType<Prisma.MailingListInBlastScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => MailingListInBlastScalarWhereInputSchema), z.lazy(() => MailingListInBlastScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => MailingListInBlastScalarWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => MailingListInBlastScalarWhereInputSchema), z.lazy(() => MailingListInBlastScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  mailingListId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  blastId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
}).strict();

export const PersonCreateWithoutReceivedMessagesInputSchema: z.ZodType<Prisma.PersonCreateWithoutReceivedMessagesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mailingLists: z.lazy(() => PersonsInMailingListsCreateNestedManyWithoutPersonInputSchema).optional()
}).strict();

export const PersonUncheckedCreateWithoutReceivedMessagesInputSchema: z.ZodType<Prisma.PersonUncheckedCreateWithoutReceivedMessagesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mailingLists: z.lazy(() => PersonsInMailingListsUncheckedCreateNestedManyWithoutPersonInputSchema).optional()
}).strict();

export const PersonCreateOrConnectWithoutReceivedMessagesInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutReceivedMessagesInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([z.lazy(() => PersonCreateWithoutReceivedMessagesInputSchema), z.lazy(() => PersonUncheckedCreateWithoutReceivedMessagesInputSchema)]),
}).strict();

export const BlastCreateWithoutMessagesSentInputSchema: z.ZodType<Prisma.BlastCreateWithoutMessagesSentInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  MailingListInBlast: z.lazy(() => MailingListInBlastCreateNestedManyWithoutBlastInputSchema).optional(),
  author: z.lazy(() => AdminUserCreateNestedOneWithoutBlastsInputSchema)
}).strict();

export const BlastUncheckedCreateWithoutMessagesSentInputSchema: z.ZodType<Prisma.BlastUncheckedCreateWithoutMessagesSentInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  authorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  MailingListInBlast: z.lazy(() => MailingListInBlastUncheckedCreateNestedManyWithoutBlastInputSchema).optional()
}).strict();

export const BlastCreateOrConnectWithoutMessagesSentInputSchema: z.ZodType<Prisma.BlastCreateOrConnectWithoutMessagesSentInput> = z.object({
  where: z.lazy(() => BlastWhereUniqueInputSchema),
  create: z.union([z.lazy(() => BlastCreateWithoutMessagesSentInputSchema), z.lazy(() => BlastUncheckedCreateWithoutMessagesSentInputSchema)]),
}).strict();

export const PersonUpsertWithoutReceivedMessagesInputSchema: z.ZodType<Prisma.PersonUpsertWithoutReceivedMessagesInput> = z.object({
  update: z.union([z.lazy(() => PersonUpdateWithoutReceivedMessagesInputSchema), z.lazy(() => PersonUncheckedUpdateWithoutReceivedMessagesInputSchema)]),
  create: z.union([z.lazy(() => PersonCreateWithoutReceivedMessagesInputSchema), z.lazy(() => PersonUncheckedCreateWithoutReceivedMessagesInputSchema)]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export const PersonUpdateToOneWithWhereWithoutReceivedMessagesInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutReceivedMessagesInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([z.lazy(() => PersonUpdateWithoutReceivedMessagesInputSchema), z.lazy(() => PersonUncheckedUpdateWithoutReceivedMessagesInputSchema)]),
}).strict();

export const PersonUpdateWithoutReceivedMessagesInputSchema: z.ZodType<Prisma.PersonUpdateWithoutReceivedMessagesInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  mailingLists: z.lazy(() => PersonsInMailingListsUpdateManyWithoutPersonNestedInputSchema).optional()
}).strict();

export const PersonUncheckedUpdateWithoutReceivedMessagesInputSchema: z.ZodType<Prisma.PersonUncheckedUpdateWithoutReceivedMessagesInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  mailingLists: z.lazy(() => PersonsInMailingListsUncheckedUpdateManyWithoutPersonNestedInputSchema).optional()
}).strict();

export const BlastUpsertWithoutMessagesSentInputSchema: z.ZodType<Prisma.BlastUpsertWithoutMessagesSentInput> = z.object({
  update: z.union([z.lazy(() => BlastUpdateWithoutMessagesSentInputSchema), z.lazy(() => BlastUncheckedUpdateWithoutMessagesSentInputSchema)]),
  create: z.union([z.lazy(() => BlastCreateWithoutMessagesSentInputSchema), z.lazy(() => BlastUncheckedCreateWithoutMessagesSentInputSchema)]),
  where: z.lazy(() => BlastWhereInputSchema).optional()
}).strict();

export const BlastUpdateToOneWithWhereWithoutMessagesSentInputSchema: z.ZodType<Prisma.BlastUpdateToOneWithWhereWithoutMessagesSentInput> = z.object({
  where: z.lazy(() => BlastWhereInputSchema).optional(),
  data: z.union([z.lazy(() => BlastUpdateWithoutMessagesSentInputSchema), z.lazy(() => BlastUncheckedUpdateWithoutMessagesSentInputSchema)]),
}).strict();

export const BlastUpdateWithoutMessagesSentInputSchema: z.ZodType<Prisma.BlastUpdateWithoutMessagesSentInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  MailingListInBlast: z.lazy(() => MailingListInBlastUpdateManyWithoutBlastNestedInputSchema).optional(),
  author: z.lazy(() => AdminUserUpdateOneRequiredWithoutBlastsNestedInputSchema).optional()
}).strict();

export const BlastUncheckedUpdateWithoutMessagesSentInputSchema: z.ZodType<Prisma.BlastUncheckedUpdateWithoutMessagesSentInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  authorId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  MailingListInBlast: z.lazy(() => MailingListInBlastUncheckedUpdateManyWithoutBlastNestedInputSchema).optional()
}).strict();

export const MessageCreateWithoutBlastInputSchema: z.ZodType<Prisma.MessageCreateWithoutBlastInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  delivered: z.boolean().optional(),
  sentTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  recipient: z.lazy(() => PersonCreateNestedOneWithoutReceivedMessagesInputSchema)
}).strict();

export const MessageUncheckedCreateWithoutBlastInputSchema: z.ZodType<Prisma.MessageUncheckedCreateWithoutBlastInput> = z.object({
  id: z.string().cuid().optional(),
  recipientId: z.string(),
  content: z.string(),
  delivered: z.boolean().optional(),
  sentTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MessageCreateOrConnectWithoutBlastInputSchema: z.ZodType<Prisma.MessageCreateOrConnectWithoutBlastInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  create: z.union([z.lazy(() => MessageCreateWithoutBlastInputSchema), z.lazy(() => MessageUncheckedCreateWithoutBlastInputSchema)]),
}).strict();

export const MessageCreateManyBlastInputEnvelopeSchema: z.ZodType<Prisma.MessageCreateManyBlastInputEnvelope> = z.object({
  data: z.union([z.lazy(() => MessageCreateManyBlastInputSchema), z.lazy(() => MessageCreateManyBlastInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const MailingListInBlastCreateWithoutBlastInputSchema: z.ZodType<Prisma.MailingListInBlastCreateWithoutBlastInput> = z.object({
  id: z.string().cuid().optional(),
  mailingList: z.lazy(() => MailingListCreateNestedOneWithoutBlastsInputSchema)
}).strict();

export const MailingListInBlastUncheckedCreateWithoutBlastInputSchema: z.ZodType<Prisma.MailingListInBlastUncheckedCreateWithoutBlastInput> = z.object({
  id: z.string().cuid().optional(),
  mailingListId: z.string()
}).strict();

export const MailingListInBlastCreateOrConnectWithoutBlastInputSchema: z.ZodType<Prisma.MailingListInBlastCreateOrConnectWithoutBlastInput> = z.object({
  where: z.lazy(() => MailingListInBlastWhereUniqueInputSchema),
  create: z.union([z.lazy(() => MailingListInBlastCreateWithoutBlastInputSchema), z.lazy(() => MailingListInBlastUncheckedCreateWithoutBlastInputSchema)]),
}).strict();

export const MailingListInBlastCreateManyBlastInputEnvelopeSchema: z.ZodType<Prisma.MailingListInBlastCreateManyBlastInputEnvelope> = z.object({
  data: z.union([z.lazy(() => MailingListInBlastCreateManyBlastInputSchema), z.lazy(() => MailingListInBlastCreateManyBlastInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AdminUserCreateWithoutBlastsInputSchema: z.ZodType<Prisma.AdminUserCreateWithoutBlastsInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  clerkId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AdminUserUncheckedCreateWithoutBlastsInputSchema: z.ZodType<Prisma.AdminUserUncheckedCreateWithoutBlastsInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  clerkId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AdminUserCreateOrConnectWithoutBlastsInputSchema: z.ZodType<Prisma.AdminUserCreateOrConnectWithoutBlastsInput> = z.object({
  where: z.lazy(() => AdminUserWhereUniqueInputSchema),
  create: z.union([z.lazy(() => AdminUserCreateWithoutBlastsInputSchema), z.lazy(() => AdminUserUncheckedCreateWithoutBlastsInputSchema)]),
}).strict();

export const MessageUpsertWithWhereUniqueWithoutBlastInputSchema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutBlastInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  update: z.union([z.lazy(() => MessageUpdateWithoutBlastInputSchema), z.lazy(() => MessageUncheckedUpdateWithoutBlastInputSchema)]),
  create: z.union([z.lazy(() => MessageCreateWithoutBlastInputSchema), z.lazy(() => MessageUncheckedCreateWithoutBlastInputSchema)]),
}).strict();

export const MessageUpdateWithWhereUniqueWithoutBlastInputSchema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutBlastInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  data: z.union([z.lazy(() => MessageUpdateWithoutBlastInputSchema), z.lazy(() => MessageUncheckedUpdateWithoutBlastInputSchema)]),
}).strict();

export const MessageUpdateManyWithWhereWithoutBlastInputSchema: z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutBlastInput> = z.object({
  where: z.lazy(() => MessageScalarWhereInputSchema),
  data: z.union([z.lazy(() => MessageUpdateManyMutationInputSchema), z.lazy(() => MessageUncheckedUpdateManyWithoutBlastInputSchema)]),
}).strict();

export const MailingListInBlastUpsertWithWhereUniqueWithoutBlastInputSchema: z.ZodType<Prisma.MailingListInBlastUpsertWithWhereUniqueWithoutBlastInput> = z.object({
  where: z.lazy(() => MailingListInBlastWhereUniqueInputSchema),
  update: z.union([z.lazy(() => MailingListInBlastUpdateWithoutBlastInputSchema), z.lazy(() => MailingListInBlastUncheckedUpdateWithoutBlastInputSchema)]),
  create: z.union([z.lazy(() => MailingListInBlastCreateWithoutBlastInputSchema), z.lazy(() => MailingListInBlastUncheckedCreateWithoutBlastInputSchema)]),
}).strict();

export const MailingListInBlastUpdateWithWhereUniqueWithoutBlastInputSchema: z.ZodType<Prisma.MailingListInBlastUpdateWithWhereUniqueWithoutBlastInput> = z.object({
  where: z.lazy(() => MailingListInBlastWhereUniqueInputSchema),
  data: z.union([z.lazy(() => MailingListInBlastUpdateWithoutBlastInputSchema), z.lazy(() => MailingListInBlastUncheckedUpdateWithoutBlastInputSchema)]),
}).strict();

export const MailingListInBlastUpdateManyWithWhereWithoutBlastInputSchema: z.ZodType<Prisma.MailingListInBlastUpdateManyWithWhereWithoutBlastInput> = z.object({
  where: z.lazy(() => MailingListInBlastScalarWhereInputSchema),
  data: z.union([z.lazy(() => MailingListInBlastUpdateManyMutationInputSchema), z.lazy(() => MailingListInBlastUncheckedUpdateManyWithoutBlastInputSchema)]),
}).strict();

export const AdminUserUpsertWithoutBlastsInputSchema: z.ZodType<Prisma.AdminUserUpsertWithoutBlastsInput> = z.object({
  update: z.union([z.lazy(() => AdminUserUpdateWithoutBlastsInputSchema), z.lazy(() => AdminUserUncheckedUpdateWithoutBlastsInputSchema)]),
  create: z.union([z.lazy(() => AdminUserCreateWithoutBlastsInputSchema), z.lazy(() => AdminUserUncheckedCreateWithoutBlastsInputSchema)]),
  where: z.lazy(() => AdminUserWhereInputSchema).optional()
}).strict();

export const AdminUserUpdateToOneWithWhereWithoutBlastsInputSchema: z.ZodType<Prisma.AdminUserUpdateToOneWithWhereWithoutBlastsInput> = z.object({
  where: z.lazy(() => AdminUserWhereInputSchema).optional(),
  data: z.union([z.lazy(() => AdminUserUpdateWithoutBlastsInputSchema), z.lazy(() => AdminUserUncheckedUpdateWithoutBlastsInputSchema)]),
}).strict();

export const AdminUserUpdateWithoutBlastsInputSchema: z.ZodType<Prisma.AdminUserUpdateWithoutBlastsInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  clerkId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const AdminUserUncheckedUpdateWithoutBlastsInputSchema: z.ZodType<Prisma.AdminUserUncheckedUpdateWithoutBlastsInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  clerkId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const PersonCreateWithoutMailingListsInputSchema: z.ZodType<Prisma.PersonCreateWithoutMailingListsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  receivedMessages: z.lazy(() => MessageCreateNestedManyWithoutRecipientInputSchema).optional()
}).strict();

export const PersonUncheckedCreateWithoutMailingListsInputSchema: z.ZodType<Prisma.PersonUncheckedCreateWithoutMailingListsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  receivedMessages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutRecipientInputSchema).optional()
}).strict();

export const PersonCreateOrConnectWithoutMailingListsInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutMailingListsInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([z.lazy(() => PersonCreateWithoutMailingListsInputSchema), z.lazy(() => PersonUncheckedCreateWithoutMailingListsInputSchema)]),
}).strict();

export const MailingListCreateWithoutRecipientsInputSchema: z.ZodType<Prisma.MailingListCreateWithoutRecipientsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  blasts: z.lazy(() => MailingListInBlastCreateNestedManyWithoutMailingListInputSchema).optional()
}).strict();

export const MailingListUncheckedCreateWithoutRecipientsInputSchema: z.ZodType<Prisma.MailingListUncheckedCreateWithoutRecipientsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  blasts: z.lazy(() => MailingListInBlastUncheckedCreateNestedManyWithoutMailingListInputSchema).optional()
}).strict();

export const MailingListCreateOrConnectWithoutRecipientsInputSchema: z.ZodType<Prisma.MailingListCreateOrConnectWithoutRecipientsInput> = z.object({
  where: z.lazy(() => MailingListWhereUniqueInputSchema),
  create: z.union([z.lazy(() => MailingListCreateWithoutRecipientsInputSchema), z.lazy(() => MailingListUncheckedCreateWithoutRecipientsInputSchema)]),
}).strict();

export const PersonUpsertWithoutMailingListsInputSchema: z.ZodType<Prisma.PersonUpsertWithoutMailingListsInput> = z.object({
  update: z.union([z.lazy(() => PersonUpdateWithoutMailingListsInputSchema), z.lazy(() => PersonUncheckedUpdateWithoutMailingListsInputSchema)]),
  create: z.union([z.lazy(() => PersonCreateWithoutMailingListsInputSchema), z.lazy(() => PersonUncheckedCreateWithoutMailingListsInputSchema)]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export const PersonUpdateToOneWithWhereWithoutMailingListsInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutMailingListsInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([z.lazy(() => PersonUpdateWithoutMailingListsInputSchema), z.lazy(() => PersonUncheckedUpdateWithoutMailingListsInputSchema)]),
}).strict();

export const PersonUpdateWithoutMailingListsInputSchema: z.ZodType<Prisma.PersonUpdateWithoutMailingListsInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  receivedMessages: z.lazy(() => MessageUpdateManyWithoutRecipientNestedInputSchema).optional()
}).strict();

export const PersonUncheckedUpdateWithoutMailingListsInputSchema: z.ZodType<Prisma.PersonUncheckedUpdateWithoutMailingListsInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  receivedMessages: z.lazy(() => MessageUncheckedUpdateManyWithoutRecipientNestedInputSchema).optional()
}).strict();

export const MailingListUpsertWithoutRecipientsInputSchema: z.ZodType<Prisma.MailingListUpsertWithoutRecipientsInput> = z.object({
  update: z.union([z.lazy(() => MailingListUpdateWithoutRecipientsInputSchema), z.lazy(() => MailingListUncheckedUpdateWithoutRecipientsInputSchema)]),
  create: z.union([z.lazy(() => MailingListCreateWithoutRecipientsInputSchema), z.lazy(() => MailingListUncheckedCreateWithoutRecipientsInputSchema)]),
  where: z.lazy(() => MailingListWhereInputSchema).optional()
}).strict();

export const MailingListUpdateToOneWithWhereWithoutRecipientsInputSchema: z.ZodType<Prisma.MailingListUpdateToOneWithWhereWithoutRecipientsInput> = z.object({
  where: z.lazy(() => MailingListWhereInputSchema).optional(),
  data: z.union([z.lazy(() => MailingListUpdateWithoutRecipientsInputSchema), z.lazy(() => MailingListUncheckedUpdateWithoutRecipientsInputSchema)]),
}).strict();

export const MailingListUpdateWithoutRecipientsInputSchema: z.ZodType<Prisma.MailingListUpdateWithoutRecipientsInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  blasts: z.lazy(() => MailingListInBlastUpdateManyWithoutMailingListNestedInputSchema).optional()
}).strict();

export const MailingListUncheckedUpdateWithoutRecipientsInputSchema: z.ZodType<Prisma.MailingListUncheckedUpdateWithoutRecipientsInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  blasts: z.lazy(() => MailingListInBlastUncheckedUpdateManyWithoutMailingListNestedInputSchema).optional()
}).strict();

export const MailingListCreateWithoutBlastsInputSchema: z.ZodType<Prisma.MailingListCreateWithoutBlastsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  recipients: z.lazy(() => PersonsInMailingListsCreateNestedManyWithoutMailingListInputSchema).optional()
}).strict();

export const MailingListUncheckedCreateWithoutBlastsInputSchema: z.ZodType<Prisma.MailingListUncheckedCreateWithoutBlastsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  recipients: z.lazy(() => PersonsInMailingListsUncheckedCreateNestedManyWithoutMailingListInputSchema).optional()
}).strict();

export const MailingListCreateOrConnectWithoutBlastsInputSchema: z.ZodType<Prisma.MailingListCreateOrConnectWithoutBlastsInput> = z.object({
  where: z.lazy(() => MailingListWhereUniqueInputSchema),
  create: z.union([z.lazy(() => MailingListCreateWithoutBlastsInputSchema), z.lazy(() => MailingListUncheckedCreateWithoutBlastsInputSchema)]),
}).strict();

export const BlastCreateWithoutMailingListInBlastInputSchema: z.ZodType<Prisma.BlastCreateWithoutMailingListInBlastInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  messagesSent: z.lazy(() => MessageCreateNestedManyWithoutBlastInputSchema).optional(),
  author: z.lazy(() => AdminUserCreateNestedOneWithoutBlastsInputSchema)
}).strict();

export const BlastUncheckedCreateWithoutMailingListInBlastInputSchema: z.ZodType<Prisma.BlastUncheckedCreateWithoutMailingListInBlastInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  authorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  messagesSent: z.lazy(() => MessageUncheckedCreateNestedManyWithoutBlastInputSchema).optional()
}).strict();

export const BlastCreateOrConnectWithoutMailingListInBlastInputSchema: z.ZodType<Prisma.BlastCreateOrConnectWithoutMailingListInBlastInput> = z.object({
  where: z.lazy(() => BlastWhereUniqueInputSchema),
  create: z.union([z.lazy(() => BlastCreateWithoutMailingListInBlastInputSchema), z.lazy(() => BlastUncheckedCreateWithoutMailingListInBlastInputSchema)]),
}).strict();

export const MailingListUpsertWithoutBlastsInputSchema: z.ZodType<Prisma.MailingListUpsertWithoutBlastsInput> = z.object({
  update: z.union([z.lazy(() => MailingListUpdateWithoutBlastsInputSchema), z.lazy(() => MailingListUncheckedUpdateWithoutBlastsInputSchema)]),
  create: z.union([z.lazy(() => MailingListCreateWithoutBlastsInputSchema), z.lazy(() => MailingListUncheckedCreateWithoutBlastsInputSchema)]),
  where: z.lazy(() => MailingListWhereInputSchema).optional()
}).strict();

export const MailingListUpdateToOneWithWhereWithoutBlastsInputSchema: z.ZodType<Prisma.MailingListUpdateToOneWithWhereWithoutBlastsInput> = z.object({
  where: z.lazy(() => MailingListWhereInputSchema).optional(),
  data: z.union([z.lazy(() => MailingListUpdateWithoutBlastsInputSchema), z.lazy(() => MailingListUncheckedUpdateWithoutBlastsInputSchema)]),
}).strict();

export const MailingListUpdateWithoutBlastsInputSchema: z.ZodType<Prisma.MailingListUpdateWithoutBlastsInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  recipients: z.lazy(() => PersonsInMailingListsUpdateManyWithoutMailingListNestedInputSchema).optional()
}).strict();

export const MailingListUncheckedUpdateWithoutBlastsInputSchema: z.ZodType<Prisma.MailingListUncheckedUpdateWithoutBlastsInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  recipients: z.lazy(() => PersonsInMailingListsUncheckedUpdateManyWithoutMailingListNestedInputSchema).optional()
}).strict();

export const BlastUpsertWithoutMailingListInBlastInputSchema: z.ZodType<Prisma.BlastUpsertWithoutMailingListInBlastInput> = z.object({
  update: z.union([z.lazy(() => BlastUpdateWithoutMailingListInBlastInputSchema), z.lazy(() => BlastUncheckedUpdateWithoutMailingListInBlastInputSchema)]),
  create: z.union([z.lazy(() => BlastCreateWithoutMailingListInBlastInputSchema), z.lazy(() => BlastUncheckedCreateWithoutMailingListInBlastInputSchema)]),
  where: z.lazy(() => BlastWhereInputSchema).optional()
}).strict();

export const BlastUpdateToOneWithWhereWithoutMailingListInBlastInputSchema: z.ZodType<Prisma.BlastUpdateToOneWithWhereWithoutMailingListInBlastInput> = z.object({
  where: z.lazy(() => BlastWhereInputSchema).optional(),
  data: z.union([z.lazy(() => BlastUpdateWithoutMailingListInBlastInputSchema), z.lazy(() => BlastUncheckedUpdateWithoutMailingListInBlastInputSchema)]),
}).strict();

export const BlastUpdateWithoutMailingListInBlastInputSchema: z.ZodType<Prisma.BlastUpdateWithoutMailingListInBlastInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  messagesSent: z.lazy(() => MessageUpdateManyWithoutBlastNestedInputSchema).optional(),
  author: z.lazy(() => AdminUserUpdateOneRequiredWithoutBlastsNestedInputSchema).optional()
}).strict();

export const BlastUncheckedUpdateWithoutMailingListInBlastInputSchema: z.ZodType<Prisma.BlastUncheckedUpdateWithoutMailingListInBlastInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  authorId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  messagesSent: z.lazy(() => MessageUncheckedUpdateManyWithoutBlastNestedInputSchema).optional()
}).strict();

export const BlastCreateManyAuthorInputSchema: z.ZodType<Prisma.BlastCreateManyAuthorInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BlastUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.BlastUpdateWithoutAuthorInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  messagesSent: z.lazy(() => MessageUpdateManyWithoutBlastNestedInputSchema).optional(),
  MailingListInBlast: z.lazy(() => MailingListInBlastUpdateManyWithoutBlastNestedInputSchema).optional()
}).strict();

export const BlastUncheckedUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.BlastUncheckedUpdateWithoutAuthorInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  messagesSent: z.lazy(() => MessageUncheckedUpdateManyWithoutBlastNestedInputSchema).optional(),
  MailingListInBlast: z.lazy(() => MailingListInBlastUncheckedUpdateManyWithoutBlastNestedInputSchema).optional()
}).strict();

export const BlastUncheckedUpdateManyWithoutAuthorInputSchema: z.ZodType<Prisma.BlastUncheckedUpdateManyWithoutAuthorInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const PersonsInMailingListsCreateManyPersonInputSchema: z.ZodType<Prisma.PersonsInMailingListsCreateManyPersonInput> = z.object({
  id: z.string().cuid().optional(),
  mailingListId: z.string()
}).strict();

export const MessageCreateManyRecipientInputSchema: z.ZodType<Prisma.MessageCreateManyRecipientInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  delivered: z.boolean().optional(),
  sentTime: z.coerce.date(),
  blastId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PersonsInMailingListsUpdateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsInMailingListsUpdateWithoutPersonInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  mailingList: z.lazy(() => MailingListUpdateOneRequiredWithoutRecipientsNestedInputSchema).optional()
}).strict();

export const PersonsInMailingListsUncheckedUpdateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsInMailingListsUncheckedUpdateWithoutPersonInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  mailingListId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const PersonsInMailingListsUncheckedUpdateManyWithoutPersonInputSchema: z.ZodType<Prisma.PersonsInMailingListsUncheckedUpdateManyWithoutPersonInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  mailingListId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const MessageUpdateWithoutRecipientInputSchema: z.ZodType<Prisma.MessageUpdateWithoutRecipientInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  delivered: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sentTime: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  blast: z.lazy(() => BlastUpdateOneRequiredWithoutMessagesSentNestedInputSchema).optional()
}).strict();

export const MessageUncheckedUpdateWithoutRecipientInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateWithoutRecipientInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  delivered: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sentTime: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  blastId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const MessageUncheckedUpdateManyWithoutRecipientInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutRecipientInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  delivered: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sentTime: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  blastId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const PersonsInMailingListsCreateManyMailingListInputSchema: z.ZodType<Prisma.PersonsInMailingListsCreateManyMailingListInput> = z.object({
  id: z.string().cuid().optional(),
  personId: z.string()
}).strict();

export const MailingListInBlastCreateManyMailingListInputSchema: z.ZodType<Prisma.MailingListInBlastCreateManyMailingListInput> = z.object({
  id: z.string().cuid().optional(),
  blastId: z.string()
}).strict();

export const PersonsInMailingListsUpdateWithoutMailingListInputSchema: z.ZodType<Prisma.PersonsInMailingListsUpdateWithoutMailingListInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  person: z.lazy(() => PersonUpdateOneRequiredWithoutMailingListsNestedInputSchema).optional()
}).strict();

export const PersonsInMailingListsUncheckedUpdateWithoutMailingListInputSchema: z.ZodType<Prisma.PersonsInMailingListsUncheckedUpdateWithoutMailingListInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  personId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const PersonsInMailingListsUncheckedUpdateManyWithoutMailingListInputSchema: z.ZodType<Prisma.PersonsInMailingListsUncheckedUpdateManyWithoutMailingListInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  personId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const MailingListInBlastUpdateWithoutMailingListInputSchema: z.ZodType<Prisma.MailingListInBlastUpdateWithoutMailingListInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  blast: z.lazy(() => BlastUpdateOneRequiredWithoutMailingListInBlastNestedInputSchema).optional()
}).strict();

export const MailingListInBlastUncheckedUpdateWithoutMailingListInputSchema: z.ZodType<Prisma.MailingListInBlastUncheckedUpdateWithoutMailingListInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  blastId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const MailingListInBlastUncheckedUpdateManyWithoutMailingListInputSchema: z.ZodType<Prisma.MailingListInBlastUncheckedUpdateManyWithoutMailingListInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  blastId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const MessageCreateManyBlastInputSchema: z.ZodType<Prisma.MessageCreateManyBlastInput> = z.object({
  id: z.string().cuid().optional(),
  recipientId: z.string(),
  content: z.string(),
  delivered: z.boolean().optional(),
  sentTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MailingListInBlastCreateManyBlastInputSchema: z.ZodType<Prisma.MailingListInBlastCreateManyBlastInput> = z.object({
  id: z.string().cuid().optional(),
  mailingListId: z.string()
}).strict();

export const MessageUpdateWithoutBlastInputSchema: z.ZodType<Prisma.MessageUpdateWithoutBlastInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  delivered: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sentTime: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  recipient: z.lazy(() => PersonUpdateOneRequiredWithoutReceivedMessagesNestedInputSchema).optional()
}).strict();

export const MessageUncheckedUpdateWithoutBlastInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateWithoutBlastInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  recipientId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  delivered: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sentTime: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const MessageUncheckedUpdateManyWithoutBlastInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutBlastInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  recipientId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  delivered: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  sentTime: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const MailingListInBlastUpdateWithoutBlastInputSchema: z.ZodType<Prisma.MailingListInBlastUpdateWithoutBlastInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  mailingList: z.lazy(() => MailingListUpdateOneRequiredWithoutBlastsNestedInputSchema).optional()
}).strict();

export const MailingListInBlastUncheckedUpdateWithoutBlastInputSchema: z.ZodType<Prisma.MailingListInBlastUncheckedUpdateWithoutBlastInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  mailingListId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

export const MailingListInBlastUncheckedUpdateManyWithoutBlastInputSchema: z.ZodType<Prisma.MailingListInBlastUncheckedUpdateManyWithoutBlastInput> = z.object({
  id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  mailingListId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const AdminUserFindFirstArgsSchema: z.ZodType<Prisma.AdminUserFindFirstArgs> = z.object({
  select: AdminUserSelectSchema.optional(),
  include: AdminUserIncludeSchema.optional(),
  where: AdminUserWhereInputSchema.optional(),
  orderBy: z.union([AdminUserOrderByWithRelationInputSchema.array(), AdminUserOrderByWithRelationInputSchema]).optional(),
  cursor: AdminUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([AdminUserScalarFieldEnumSchema, AdminUserScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const AdminUserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AdminUserFindFirstOrThrowArgs> = z.object({
  select: AdminUserSelectSchema.optional(),
  include: AdminUserIncludeSchema.optional(),
  where: AdminUserWhereInputSchema.optional(),
  orderBy: z.union([AdminUserOrderByWithRelationInputSchema.array(), AdminUserOrderByWithRelationInputSchema]).optional(),
  cursor: AdminUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([AdminUserScalarFieldEnumSchema, AdminUserScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const AdminUserFindManyArgsSchema: z.ZodType<Prisma.AdminUserFindManyArgs> = z.object({
  select: AdminUserSelectSchema.optional(),
  include: AdminUserIncludeSchema.optional(),
  where: AdminUserWhereInputSchema.optional(),
  orderBy: z.union([AdminUserOrderByWithRelationInputSchema.array(), AdminUserOrderByWithRelationInputSchema]).optional(),
  cursor: AdminUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([AdminUserScalarFieldEnumSchema, AdminUserScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const AdminUserAggregateArgsSchema: z.ZodType<Prisma.AdminUserAggregateArgs> = z.object({
  where: AdminUserWhereInputSchema.optional(),
  orderBy: z.union([AdminUserOrderByWithRelationInputSchema.array(), AdminUserOrderByWithRelationInputSchema]).optional(),
  cursor: AdminUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const AdminUserGroupByArgsSchema: z.ZodType<Prisma.AdminUserGroupByArgs> = z.object({
  where: AdminUserWhereInputSchema.optional(),
  orderBy: z.union([AdminUserOrderByWithAggregationInputSchema.array(), AdminUserOrderByWithAggregationInputSchema]).optional(),
  by: AdminUserScalarFieldEnumSchema.array(),
  having: AdminUserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const AdminUserFindUniqueArgsSchema: z.ZodType<Prisma.AdminUserFindUniqueArgs> = z.object({
  select: AdminUserSelectSchema.optional(),
  include: AdminUserIncludeSchema.optional(),
  where: AdminUserWhereUniqueInputSchema,
}).strict();

export const AdminUserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AdminUserFindUniqueOrThrowArgs> = z.object({
  select: AdminUserSelectSchema.optional(),
  include: AdminUserIncludeSchema.optional(),
  where: AdminUserWhereUniqueInputSchema,
}).strict();

export const PersonFindFirstArgsSchema: z.ZodType<Prisma.PersonFindFirstArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([PersonOrderByWithRelationInputSchema.array(), PersonOrderByWithRelationInputSchema]).optional(),
  cursor: PersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([PersonScalarFieldEnumSchema, PersonScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const PersonFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PersonFindFirstOrThrowArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([PersonOrderByWithRelationInputSchema.array(), PersonOrderByWithRelationInputSchema]).optional(),
  cursor: PersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([PersonScalarFieldEnumSchema, PersonScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const PersonFindManyArgsSchema: z.ZodType<Prisma.PersonFindManyArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([PersonOrderByWithRelationInputSchema.array(), PersonOrderByWithRelationInputSchema]).optional(),
  cursor: PersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([PersonScalarFieldEnumSchema, PersonScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const PersonAggregateArgsSchema: z.ZodType<Prisma.PersonAggregateArgs> = z.object({
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([PersonOrderByWithRelationInputSchema.array(), PersonOrderByWithRelationInputSchema]).optional(),
  cursor: PersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const PersonGroupByArgsSchema: z.ZodType<Prisma.PersonGroupByArgs> = z.object({
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([PersonOrderByWithAggregationInputSchema.array(), PersonOrderByWithAggregationInputSchema]).optional(),
  by: PersonScalarFieldEnumSchema.array(),
  having: PersonScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const PersonFindUniqueArgsSchema: z.ZodType<Prisma.PersonFindUniqueArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereUniqueInputSchema,
}).strict();

export const PersonFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PersonFindUniqueOrThrowArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereUniqueInputSchema,
}).strict();

export const MailingListFindFirstArgsSchema: z.ZodType<Prisma.MailingListFindFirstArgs> = z.object({
  select: MailingListSelectSchema.optional(),
  include: MailingListIncludeSchema.optional(),
  where: MailingListWhereInputSchema.optional(),
  orderBy: z.union([MailingListOrderByWithRelationInputSchema.array(), MailingListOrderByWithRelationInputSchema]).optional(),
  cursor: MailingListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([MailingListScalarFieldEnumSchema, MailingListScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const MailingListFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MailingListFindFirstOrThrowArgs> = z.object({
  select: MailingListSelectSchema.optional(),
  include: MailingListIncludeSchema.optional(),
  where: MailingListWhereInputSchema.optional(),
  orderBy: z.union([MailingListOrderByWithRelationInputSchema.array(), MailingListOrderByWithRelationInputSchema]).optional(),
  cursor: MailingListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([MailingListScalarFieldEnumSchema, MailingListScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const MailingListFindManyArgsSchema: z.ZodType<Prisma.MailingListFindManyArgs> = z.object({
  select: MailingListSelectSchema.optional(),
  include: MailingListIncludeSchema.optional(),
  where: MailingListWhereInputSchema.optional(),
  orderBy: z.union([MailingListOrderByWithRelationInputSchema.array(), MailingListOrderByWithRelationInputSchema]).optional(),
  cursor: MailingListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([MailingListScalarFieldEnumSchema, MailingListScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const MailingListAggregateArgsSchema: z.ZodType<Prisma.MailingListAggregateArgs> = z.object({
  where: MailingListWhereInputSchema.optional(),
  orderBy: z.union([MailingListOrderByWithRelationInputSchema.array(), MailingListOrderByWithRelationInputSchema]).optional(),
  cursor: MailingListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const MailingListGroupByArgsSchema: z.ZodType<Prisma.MailingListGroupByArgs> = z.object({
  where: MailingListWhereInputSchema.optional(),
  orderBy: z.union([MailingListOrderByWithAggregationInputSchema.array(), MailingListOrderByWithAggregationInputSchema]).optional(),
  by: MailingListScalarFieldEnumSchema.array(),
  having: MailingListScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const MailingListFindUniqueArgsSchema: z.ZodType<Prisma.MailingListFindUniqueArgs> = z.object({
  select: MailingListSelectSchema.optional(),
  include: MailingListIncludeSchema.optional(),
  where: MailingListWhereUniqueInputSchema,
}).strict();

export const MailingListFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MailingListFindUniqueOrThrowArgs> = z.object({
  select: MailingListSelectSchema.optional(),
  include: MailingListIncludeSchema.optional(),
  where: MailingListWhereUniqueInputSchema,
}).strict();

export const MessageFindFirstArgsSchema: z.ZodType<Prisma.MessageFindFirstArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([MessageOrderByWithRelationInputSchema.array(), MessageOrderByWithRelationInputSchema]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([MessageScalarFieldEnumSchema, MessageScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const MessageFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MessageFindFirstOrThrowArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([MessageOrderByWithRelationInputSchema.array(), MessageOrderByWithRelationInputSchema]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([MessageScalarFieldEnumSchema, MessageScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const MessageFindManyArgsSchema: z.ZodType<Prisma.MessageFindManyArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([MessageOrderByWithRelationInputSchema.array(), MessageOrderByWithRelationInputSchema]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([MessageScalarFieldEnumSchema, MessageScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const MessageAggregateArgsSchema: z.ZodType<Prisma.MessageAggregateArgs> = z.object({
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([MessageOrderByWithRelationInputSchema.array(), MessageOrderByWithRelationInputSchema]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const MessageGroupByArgsSchema: z.ZodType<Prisma.MessageGroupByArgs> = z.object({
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([MessageOrderByWithAggregationInputSchema.array(), MessageOrderByWithAggregationInputSchema]).optional(),
  by: MessageScalarFieldEnumSchema.array(),
  having: MessageScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const MessageFindUniqueArgsSchema: z.ZodType<Prisma.MessageFindUniqueArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereUniqueInputSchema,
}).strict();

export const MessageFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MessageFindUniqueOrThrowArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereUniqueInputSchema,
}).strict();

export const BlastFindFirstArgsSchema: z.ZodType<Prisma.BlastFindFirstArgs> = z.object({
  select: BlastSelectSchema.optional(),
  include: BlastIncludeSchema.optional(),
  where: BlastWhereInputSchema.optional(),
  orderBy: z.union([BlastOrderByWithRelationInputSchema.array(), BlastOrderByWithRelationInputSchema]).optional(),
  cursor: BlastWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([BlastScalarFieldEnumSchema, BlastScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const BlastFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BlastFindFirstOrThrowArgs> = z.object({
  select: BlastSelectSchema.optional(),
  include: BlastIncludeSchema.optional(),
  where: BlastWhereInputSchema.optional(),
  orderBy: z.union([BlastOrderByWithRelationInputSchema.array(), BlastOrderByWithRelationInputSchema]).optional(),
  cursor: BlastWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([BlastScalarFieldEnumSchema, BlastScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const BlastFindManyArgsSchema: z.ZodType<Prisma.BlastFindManyArgs> = z.object({
  select: BlastSelectSchema.optional(),
  include: BlastIncludeSchema.optional(),
  where: BlastWhereInputSchema.optional(),
  orderBy: z.union([BlastOrderByWithRelationInputSchema.array(), BlastOrderByWithRelationInputSchema]).optional(),
  cursor: BlastWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([BlastScalarFieldEnumSchema, BlastScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const BlastAggregateArgsSchema: z.ZodType<Prisma.BlastAggregateArgs> = z.object({
  where: BlastWhereInputSchema.optional(),
  orderBy: z.union([BlastOrderByWithRelationInputSchema.array(), BlastOrderByWithRelationInputSchema]).optional(),
  cursor: BlastWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const BlastGroupByArgsSchema: z.ZodType<Prisma.BlastGroupByArgs> = z.object({
  where: BlastWhereInputSchema.optional(),
  orderBy: z.union([BlastOrderByWithAggregationInputSchema.array(), BlastOrderByWithAggregationInputSchema]).optional(),
  by: BlastScalarFieldEnumSchema.array(),
  having: BlastScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const BlastFindUniqueArgsSchema: z.ZodType<Prisma.BlastFindUniqueArgs> = z.object({
  select: BlastSelectSchema.optional(),
  include: BlastIncludeSchema.optional(),
  where: BlastWhereUniqueInputSchema,
}).strict();

export const BlastFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BlastFindUniqueOrThrowArgs> = z.object({
  select: BlastSelectSchema.optional(),
  include: BlastIncludeSchema.optional(),
  where: BlastWhereUniqueInputSchema,
}).strict();

export const PersonsInMailingListsFindFirstArgsSchema: z.ZodType<Prisma.PersonsInMailingListsFindFirstArgs> = z.object({
  select: PersonsInMailingListsSelectSchema.optional(),
  include: PersonsInMailingListsIncludeSchema.optional(),
  where: PersonsInMailingListsWhereInputSchema.optional(),
  orderBy: z.union([PersonsInMailingListsOrderByWithRelationInputSchema.array(), PersonsInMailingListsOrderByWithRelationInputSchema]).optional(),
  cursor: PersonsInMailingListsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([PersonsInMailingListsScalarFieldEnumSchema, PersonsInMailingListsScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const PersonsInMailingListsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PersonsInMailingListsFindFirstOrThrowArgs> = z.object({
  select: PersonsInMailingListsSelectSchema.optional(),
  include: PersonsInMailingListsIncludeSchema.optional(),
  where: PersonsInMailingListsWhereInputSchema.optional(),
  orderBy: z.union([PersonsInMailingListsOrderByWithRelationInputSchema.array(), PersonsInMailingListsOrderByWithRelationInputSchema]).optional(),
  cursor: PersonsInMailingListsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([PersonsInMailingListsScalarFieldEnumSchema, PersonsInMailingListsScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const PersonsInMailingListsFindManyArgsSchema: z.ZodType<Prisma.PersonsInMailingListsFindManyArgs> = z.object({
  select: PersonsInMailingListsSelectSchema.optional(),
  include: PersonsInMailingListsIncludeSchema.optional(),
  where: PersonsInMailingListsWhereInputSchema.optional(),
  orderBy: z.union([PersonsInMailingListsOrderByWithRelationInputSchema.array(), PersonsInMailingListsOrderByWithRelationInputSchema]).optional(),
  cursor: PersonsInMailingListsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([PersonsInMailingListsScalarFieldEnumSchema, PersonsInMailingListsScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const PersonsInMailingListsAggregateArgsSchema: z.ZodType<Prisma.PersonsInMailingListsAggregateArgs> = z.object({
  where: PersonsInMailingListsWhereInputSchema.optional(),
  orderBy: z.union([PersonsInMailingListsOrderByWithRelationInputSchema.array(), PersonsInMailingListsOrderByWithRelationInputSchema]).optional(),
  cursor: PersonsInMailingListsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const PersonsInMailingListsGroupByArgsSchema: z.ZodType<Prisma.PersonsInMailingListsGroupByArgs> = z.object({
  where: PersonsInMailingListsWhereInputSchema.optional(),
  orderBy: z.union([PersonsInMailingListsOrderByWithAggregationInputSchema.array(), PersonsInMailingListsOrderByWithAggregationInputSchema]).optional(),
  by: PersonsInMailingListsScalarFieldEnumSchema.array(),
  having: PersonsInMailingListsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const PersonsInMailingListsFindUniqueArgsSchema: z.ZodType<Prisma.PersonsInMailingListsFindUniqueArgs> = z.object({
  select: PersonsInMailingListsSelectSchema.optional(),
  include: PersonsInMailingListsIncludeSchema.optional(),
  where: PersonsInMailingListsWhereUniqueInputSchema,
}).strict();

export const PersonsInMailingListsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PersonsInMailingListsFindUniqueOrThrowArgs> = z.object({
  select: PersonsInMailingListsSelectSchema.optional(),
  include: PersonsInMailingListsIncludeSchema.optional(),
  where: PersonsInMailingListsWhereUniqueInputSchema,
}).strict();

export const MailingListInBlastFindFirstArgsSchema: z.ZodType<Prisma.MailingListInBlastFindFirstArgs> = z.object({
  select: MailingListInBlastSelectSchema.optional(),
  include: MailingListInBlastIncludeSchema.optional(),
  where: MailingListInBlastWhereInputSchema.optional(),
  orderBy: z.union([MailingListInBlastOrderByWithRelationInputSchema.array(), MailingListInBlastOrderByWithRelationInputSchema]).optional(),
  cursor: MailingListInBlastWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([MailingListInBlastScalarFieldEnumSchema, MailingListInBlastScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const MailingListInBlastFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MailingListInBlastFindFirstOrThrowArgs> = z.object({
  select: MailingListInBlastSelectSchema.optional(),
  include: MailingListInBlastIncludeSchema.optional(),
  where: MailingListInBlastWhereInputSchema.optional(),
  orderBy: z.union([MailingListInBlastOrderByWithRelationInputSchema.array(), MailingListInBlastOrderByWithRelationInputSchema]).optional(),
  cursor: MailingListInBlastWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([MailingListInBlastScalarFieldEnumSchema, MailingListInBlastScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const MailingListInBlastFindManyArgsSchema: z.ZodType<Prisma.MailingListInBlastFindManyArgs> = z.object({
  select: MailingListInBlastSelectSchema.optional(),
  include: MailingListInBlastIncludeSchema.optional(),
  where: MailingListInBlastWhereInputSchema.optional(),
  orderBy: z.union([MailingListInBlastOrderByWithRelationInputSchema.array(), MailingListInBlastOrderByWithRelationInputSchema]).optional(),
  cursor: MailingListInBlastWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([MailingListInBlastScalarFieldEnumSchema, MailingListInBlastScalarFieldEnumSchema.array()]).optional(),
}).strict();

export const MailingListInBlastAggregateArgsSchema: z.ZodType<Prisma.MailingListInBlastAggregateArgs> = z.object({
  where: MailingListInBlastWhereInputSchema.optional(),
  orderBy: z.union([MailingListInBlastOrderByWithRelationInputSchema.array(), MailingListInBlastOrderByWithRelationInputSchema]).optional(),
  cursor: MailingListInBlastWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const MailingListInBlastGroupByArgsSchema: z.ZodType<Prisma.MailingListInBlastGroupByArgs> = z.object({
  where: MailingListInBlastWhereInputSchema.optional(),
  orderBy: z.union([MailingListInBlastOrderByWithAggregationInputSchema.array(), MailingListInBlastOrderByWithAggregationInputSchema]).optional(),
  by: MailingListInBlastScalarFieldEnumSchema.array(),
  having: MailingListInBlastScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const MailingListInBlastFindUniqueArgsSchema: z.ZodType<Prisma.MailingListInBlastFindUniqueArgs> = z.object({
  select: MailingListInBlastSelectSchema.optional(),
  include: MailingListInBlastIncludeSchema.optional(),
  where: MailingListInBlastWhereUniqueInputSchema,
}).strict();

export const MailingListInBlastFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MailingListInBlastFindUniqueOrThrowArgs> = z.object({
  select: MailingListInBlastSelectSchema.optional(),
  include: MailingListInBlastIncludeSchema.optional(),
  where: MailingListInBlastWhereUniqueInputSchema,
}).strict();

export const AdminUserCreateArgsSchema: z.ZodType<Prisma.AdminUserCreateArgs> = z.object({
  select: AdminUserSelectSchema.optional(),
  include: AdminUserIncludeSchema.optional(),
  data: z.union([AdminUserCreateInputSchema, AdminUserUncheckedCreateInputSchema]),
}).strict();

export const AdminUserUpsertArgsSchema: z.ZodType<Prisma.AdminUserUpsertArgs> = z.object({
  select: AdminUserSelectSchema.optional(),
  include: AdminUserIncludeSchema.optional(),
  where: AdminUserWhereUniqueInputSchema,
  create: z.union([AdminUserCreateInputSchema, AdminUserUncheckedCreateInputSchema]),
  update: z.union([AdminUserUpdateInputSchema, AdminUserUncheckedUpdateInputSchema]),
}).strict();

export const AdminUserCreateManyArgsSchema: z.ZodType<Prisma.AdminUserCreateManyArgs> = z.object({
  data: z.union([AdminUserCreateManyInputSchema, AdminUserCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const AdminUserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AdminUserCreateManyAndReturnArgs> = z.object({
  data: z.union([AdminUserCreateManyInputSchema, AdminUserCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const AdminUserDeleteArgsSchema: z.ZodType<Prisma.AdminUserDeleteArgs> = z.object({
  select: AdminUserSelectSchema.optional(),
  include: AdminUserIncludeSchema.optional(),
  where: AdminUserWhereUniqueInputSchema,
}).strict();

export const AdminUserUpdateArgsSchema: z.ZodType<Prisma.AdminUserUpdateArgs> = z.object({
  select: AdminUserSelectSchema.optional(),
  include: AdminUserIncludeSchema.optional(),
  data: z.union([AdminUserUpdateInputSchema, AdminUserUncheckedUpdateInputSchema]),
  where: AdminUserWhereUniqueInputSchema,
}).strict();

export const AdminUserUpdateManyArgsSchema: z.ZodType<Prisma.AdminUserUpdateManyArgs> = z.object({
  data: z.union([AdminUserUpdateManyMutationInputSchema, AdminUserUncheckedUpdateManyInputSchema]),
  where: AdminUserWhereInputSchema.optional(),
}).strict();

export const AdminUserDeleteManyArgsSchema: z.ZodType<Prisma.AdminUserDeleteManyArgs> = z.object({
  where: AdminUserWhereInputSchema.optional(),
}).strict();

export const PersonCreateArgsSchema: z.ZodType<Prisma.PersonCreateArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  data: z.union([PersonCreateInputSchema, PersonUncheckedCreateInputSchema]),
}).strict();

export const PersonUpsertArgsSchema: z.ZodType<Prisma.PersonUpsertArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereUniqueInputSchema,
  create: z.union([PersonCreateInputSchema, PersonUncheckedCreateInputSchema]),
  update: z.union([PersonUpdateInputSchema, PersonUncheckedUpdateInputSchema]),
}).strict();

export const PersonCreateManyArgsSchema: z.ZodType<Prisma.PersonCreateManyArgs> = z.object({
  data: z.union([PersonCreateManyInputSchema, PersonCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const PersonCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PersonCreateManyAndReturnArgs> = z.object({
  data: z.union([PersonCreateManyInputSchema, PersonCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const PersonDeleteArgsSchema: z.ZodType<Prisma.PersonDeleteArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereUniqueInputSchema,
}).strict();

export const PersonUpdateArgsSchema: z.ZodType<Prisma.PersonUpdateArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  data: z.union([PersonUpdateInputSchema, PersonUncheckedUpdateInputSchema]),
  where: PersonWhereUniqueInputSchema,
}).strict();

export const PersonUpdateManyArgsSchema: z.ZodType<Prisma.PersonUpdateManyArgs> = z.object({
  data: z.union([PersonUpdateManyMutationInputSchema, PersonUncheckedUpdateManyInputSchema]),
  where: PersonWhereInputSchema.optional(),
}).strict();

export const PersonDeleteManyArgsSchema: z.ZodType<Prisma.PersonDeleteManyArgs> = z.object({
  where: PersonWhereInputSchema.optional(),
}).strict();

export const MailingListCreateArgsSchema: z.ZodType<Prisma.MailingListCreateArgs> = z.object({
  select: MailingListSelectSchema.optional(),
  include: MailingListIncludeSchema.optional(),
  data: z.union([MailingListCreateInputSchema, MailingListUncheckedCreateInputSchema]),
}).strict();

export const MailingListUpsertArgsSchema: z.ZodType<Prisma.MailingListUpsertArgs> = z.object({
  select: MailingListSelectSchema.optional(),
  include: MailingListIncludeSchema.optional(),
  where: MailingListWhereUniqueInputSchema,
  create: z.union([MailingListCreateInputSchema, MailingListUncheckedCreateInputSchema]),
  update: z.union([MailingListUpdateInputSchema, MailingListUncheckedUpdateInputSchema]),
}).strict();

export const MailingListCreateManyArgsSchema: z.ZodType<Prisma.MailingListCreateManyArgs> = z.object({
  data: z.union([MailingListCreateManyInputSchema, MailingListCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const MailingListCreateManyAndReturnArgsSchema: z.ZodType<Prisma.MailingListCreateManyAndReturnArgs> = z.object({
  data: z.union([MailingListCreateManyInputSchema, MailingListCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const MailingListDeleteArgsSchema: z.ZodType<Prisma.MailingListDeleteArgs> = z.object({
  select: MailingListSelectSchema.optional(),
  include: MailingListIncludeSchema.optional(),
  where: MailingListWhereUniqueInputSchema,
}).strict();

export const MailingListUpdateArgsSchema: z.ZodType<Prisma.MailingListUpdateArgs> = z.object({
  select: MailingListSelectSchema.optional(),
  include: MailingListIncludeSchema.optional(),
  data: z.union([MailingListUpdateInputSchema, MailingListUncheckedUpdateInputSchema]),
  where: MailingListWhereUniqueInputSchema,
}).strict();

export const MailingListUpdateManyArgsSchema: z.ZodType<Prisma.MailingListUpdateManyArgs> = z.object({
  data: z.union([MailingListUpdateManyMutationInputSchema, MailingListUncheckedUpdateManyInputSchema]),
  where: MailingListWhereInputSchema.optional(),
}).strict();

export const MailingListDeleteManyArgsSchema: z.ZodType<Prisma.MailingListDeleteManyArgs> = z.object({
  where: MailingListWhereInputSchema.optional(),
}).strict();

export const MessageCreateArgsSchema: z.ZodType<Prisma.MessageCreateArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  data: z.union([MessageCreateInputSchema, MessageUncheckedCreateInputSchema]),
}).strict();

export const MessageUpsertArgsSchema: z.ZodType<Prisma.MessageUpsertArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereUniqueInputSchema,
  create: z.union([MessageCreateInputSchema, MessageUncheckedCreateInputSchema]),
  update: z.union([MessageUpdateInputSchema, MessageUncheckedUpdateInputSchema]),
}).strict();

export const MessageCreateManyArgsSchema: z.ZodType<Prisma.MessageCreateManyArgs> = z.object({
  data: z.union([MessageCreateManyInputSchema, MessageCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const MessageCreateManyAndReturnArgsSchema: z.ZodType<Prisma.MessageCreateManyAndReturnArgs> = z.object({
  data: z.union([MessageCreateManyInputSchema, MessageCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const MessageDeleteArgsSchema: z.ZodType<Prisma.MessageDeleteArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereUniqueInputSchema,
}).strict();

export const MessageUpdateArgsSchema: z.ZodType<Prisma.MessageUpdateArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  data: z.union([MessageUpdateInputSchema, MessageUncheckedUpdateInputSchema]),
  where: MessageWhereUniqueInputSchema,
}).strict();

export const MessageUpdateManyArgsSchema: z.ZodType<Prisma.MessageUpdateManyArgs> = z.object({
  data: z.union([MessageUpdateManyMutationInputSchema, MessageUncheckedUpdateManyInputSchema]),
  where: MessageWhereInputSchema.optional(),
}).strict();

export const MessageDeleteManyArgsSchema: z.ZodType<Prisma.MessageDeleteManyArgs> = z.object({
  where: MessageWhereInputSchema.optional(),
}).strict();

export const BlastCreateArgsSchema: z.ZodType<Prisma.BlastCreateArgs> = z.object({
  select: BlastSelectSchema.optional(),
  include: BlastIncludeSchema.optional(),
  data: z.union([BlastCreateInputSchema, BlastUncheckedCreateInputSchema]),
}).strict();

export const BlastUpsertArgsSchema: z.ZodType<Prisma.BlastUpsertArgs> = z.object({
  select: BlastSelectSchema.optional(),
  include: BlastIncludeSchema.optional(),
  where: BlastWhereUniqueInputSchema,
  create: z.union([BlastCreateInputSchema, BlastUncheckedCreateInputSchema]),
  update: z.union([BlastUpdateInputSchema, BlastUncheckedUpdateInputSchema]),
}).strict();

export const BlastCreateManyArgsSchema: z.ZodType<Prisma.BlastCreateManyArgs> = z.object({
  data: z.union([BlastCreateManyInputSchema, BlastCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const BlastCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BlastCreateManyAndReturnArgs> = z.object({
  data: z.union([BlastCreateManyInputSchema, BlastCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const BlastDeleteArgsSchema: z.ZodType<Prisma.BlastDeleteArgs> = z.object({
  select: BlastSelectSchema.optional(),
  include: BlastIncludeSchema.optional(),
  where: BlastWhereUniqueInputSchema,
}).strict();

export const BlastUpdateArgsSchema: z.ZodType<Prisma.BlastUpdateArgs> = z.object({
  select: BlastSelectSchema.optional(),
  include: BlastIncludeSchema.optional(),
  data: z.union([BlastUpdateInputSchema, BlastUncheckedUpdateInputSchema]),
  where: BlastWhereUniqueInputSchema,
}).strict();

export const BlastUpdateManyArgsSchema: z.ZodType<Prisma.BlastUpdateManyArgs> = z.object({
  data: z.union([BlastUpdateManyMutationInputSchema, BlastUncheckedUpdateManyInputSchema]),
  where: BlastWhereInputSchema.optional(),
}).strict();

export const BlastDeleteManyArgsSchema: z.ZodType<Prisma.BlastDeleteManyArgs> = z.object({
  where: BlastWhereInputSchema.optional(),
}).strict();

export const PersonsInMailingListsCreateArgsSchema: z.ZodType<Prisma.PersonsInMailingListsCreateArgs> = z.object({
  select: PersonsInMailingListsSelectSchema.optional(),
  include: PersonsInMailingListsIncludeSchema.optional(),
  data: z.union([PersonsInMailingListsCreateInputSchema, PersonsInMailingListsUncheckedCreateInputSchema]),
}).strict();

export const PersonsInMailingListsUpsertArgsSchema: z.ZodType<Prisma.PersonsInMailingListsUpsertArgs> = z.object({
  select: PersonsInMailingListsSelectSchema.optional(),
  include: PersonsInMailingListsIncludeSchema.optional(),
  where: PersonsInMailingListsWhereUniqueInputSchema,
  create: z.union([PersonsInMailingListsCreateInputSchema, PersonsInMailingListsUncheckedCreateInputSchema]),
  update: z.union([PersonsInMailingListsUpdateInputSchema, PersonsInMailingListsUncheckedUpdateInputSchema]),
}).strict();

export const PersonsInMailingListsCreateManyArgsSchema: z.ZodType<Prisma.PersonsInMailingListsCreateManyArgs> = z.object({
  data: z.union([PersonsInMailingListsCreateManyInputSchema, PersonsInMailingListsCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const PersonsInMailingListsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PersonsInMailingListsCreateManyAndReturnArgs> = z.object({
  data: z.union([PersonsInMailingListsCreateManyInputSchema, PersonsInMailingListsCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const PersonsInMailingListsDeleteArgsSchema: z.ZodType<Prisma.PersonsInMailingListsDeleteArgs> = z.object({
  select: PersonsInMailingListsSelectSchema.optional(),
  include: PersonsInMailingListsIncludeSchema.optional(),
  where: PersonsInMailingListsWhereUniqueInputSchema,
}).strict();

export const PersonsInMailingListsUpdateArgsSchema: z.ZodType<Prisma.PersonsInMailingListsUpdateArgs> = z.object({
  select: PersonsInMailingListsSelectSchema.optional(),
  include: PersonsInMailingListsIncludeSchema.optional(),
  data: z.union([PersonsInMailingListsUpdateInputSchema, PersonsInMailingListsUncheckedUpdateInputSchema]),
  where: PersonsInMailingListsWhereUniqueInputSchema,
}).strict();

export const PersonsInMailingListsUpdateManyArgsSchema: z.ZodType<Prisma.PersonsInMailingListsUpdateManyArgs> = z.object({
  data: z.union([PersonsInMailingListsUpdateManyMutationInputSchema, PersonsInMailingListsUncheckedUpdateManyInputSchema]),
  where: PersonsInMailingListsWhereInputSchema.optional(),
}).strict();

export const PersonsInMailingListsDeleteManyArgsSchema: z.ZodType<Prisma.PersonsInMailingListsDeleteManyArgs> = z.object({
  where: PersonsInMailingListsWhereInputSchema.optional(),
}).strict();

export const MailingListInBlastCreateArgsSchema: z.ZodType<Prisma.MailingListInBlastCreateArgs> = z.object({
  select: MailingListInBlastSelectSchema.optional(),
  include: MailingListInBlastIncludeSchema.optional(),
  data: z.union([MailingListInBlastCreateInputSchema, MailingListInBlastUncheckedCreateInputSchema]),
}).strict();

export const MailingListInBlastUpsertArgsSchema: z.ZodType<Prisma.MailingListInBlastUpsertArgs> = z.object({
  select: MailingListInBlastSelectSchema.optional(),
  include: MailingListInBlastIncludeSchema.optional(),
  where: MailingListInBlastWhereUniqueInputSchema,
  create: z.union([MailingListInBlastCreateInputSchema, MailingListInBlastUncheckedCreateInputSchema]),
  update: z.union([MailingListInBlastUpdateInputSchema, MailingListInBlastUncheckedUpdateInputSchema]),
}).strict();

export const MailingListInBlastCreateManyArgsSchema: z.ZodType<Prisma.MailingListInBlastCreateManyArgs> = z.object({
  data: z.union([MailingListInBlastCreateManyInputSchema, MailingListInBlastCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const MailingListInBlastCreateManyAndReturnArgsSchema: z.ZodType<Prisma.MailingListInBlastCreateManyAndReturnArgs> = z.object({
  data: z.union([MailingListInBlastCreateManyInputSchema, MailingListInBlastCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const MailingListInBlastDeleteArgsSchema: z.ZodType<Prisma.MailingListInBlastDeleteArgs> = z.object({
  select: MailingListInBlastSelectSchema.optional(),
  include: MailingListInBlastIncludeSchema.optional(),
  where: MailingListInBlastWhereUniqueInputSchema,
}).strict();

export const MailingListInBlastUpdateArgsSchema: z.ZodType<Prisma.MailingListInBlastUpdateArgs> = z.object({
  select: MailingListInBlastSelectSchema.optional(),
  include: MailingListInBlastIncludeSchema.optional(),
  data: z.union([MailingListInBlastUpdateInputSchema, MailingListInBlastUncheckedUpdateInputSchema]),
  where: MailingListInBlastWhereUniqueInputSchema,
}).strict();

export const MailingListInBlastUpdateManyArgsSchema: z.ZodType<Prisma.MailingListInBlastUpdateManyArgs> = z.object({
  data: z.union([MailingListInBlastUpdateManyMutationInputSchema, MailingListInBlastUncheckedUpdateManyInputSchema]),
  where: MailingListInBlastWhereInputSchema.optional(),
}).strict();

export const MailingListInBlastDeleteManyArgsSchema: z.ZodType<Prisma.MailingListInBlastDeleteManyArgs> = z.object({
  where: MailingListInBlastWhereInputSchema.optional(),
}).strict();