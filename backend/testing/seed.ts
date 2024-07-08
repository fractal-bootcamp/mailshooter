import prisma from "../prisma/client"

// TODO: create a test database


export const seedDatabase = async () => {
    await prisma.mailingList.create({
        data: {
            id: "1a",
            name: "list1",
            PersonsInMailingLists: {
                create: [
                    {
                        person: {
                            create: {
                                name: "person1",
                                email: "person1@example.com"
                            }
                        }
                    }
                ]
            },
            MailingListInBlast: {
                create: [
                    {
                        blast: {
                            create: {
                                name: "blast1",
                                author: {
                                    create: {
                                        email: "admin@example.com",
                                        name: "admin",
                                        clerkId: "admin123123"

                                    }
                                }
                            }
                        }
                    }
                ]
            }
        }
    })
}
