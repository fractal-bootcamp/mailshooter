
export const listData = {
    admin1: {
        id: "001a",
        email: "admin1@example.com",
        name: "Admin One",
        clerkId: "clerk_345",
    },
    admin2: {
        id: `001b`,
        email: "admin2@example.com",
        name: "Admin Two",
        clerkId: "clerk_123",
    },
    person1: {
        id: "001a",
        name: "John Doe",
        email: "john@example.com",
    },
    person2: {
        id: `001b`,
        name: "Jane Smith",
        email: "jane@example.com",
    },
    mailingList1: {
        id: "001a",
        name: "Newsletter Subscribers",
    },
    mailingList2: {
        id: `001b`,
        name: "VIP Customers",
    },

}


export const blastData = {
    blast1: {
        id: "001a",
        name: "Monthly Newsletter",
        authorId: listData.admin1.id,
    },
    blast2: {
        id: "001b",
        name: "Special Promotion",
        authorId: listData.admin2.id,
    },
}

export const messageData = {
    message1: {
        id: "001a",
        content: "Welcome to our monthly newsletter!",
        recipientId: listData.person1.id,
        // blastId: blastData.blast1.id,
        sentTime: new Date(),
        delivered: true,
    },
    message2: {
        id: `001b`,
        content: "Special offer for our VIP customers!",
        recipientId: listData.person2.id,
        // blastId: blastData.blast2.id,
        sentTime: new Date(),
        delivered: false,
    },
}
