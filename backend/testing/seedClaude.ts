import { PrismaClient } from '@testPrisma/client' // TODO create a test database with docker

const testPrisma = new PrismaClient()

export async function seedTestDatabase() {
    // Create AdminUsers
    const admin1 = await testPrisma.adminUser.create({
        data: {
            email: 'admin1@example.com',
            name: 'Admin One',
            clerkId: 'clerk_345'
        },
    })

    const admin2 = await testPrisma.adminUser.create({
        data: {
            email: 'admin2@example.com',
            name: 'Admin Two',
            clerkId: 'clerk_123'
        },
    })

    // Create Persons
    const person1 = await testPrisma.person.create({
        data: {
            name: 'John Doe',
            email: 'john@example.com',
        },
    })

    const person2 = await testPrisma.person.create({
        data: {
            name: 'Jane Smith',
            email: 'jane@example.com',
        },
    })

    // Create MailingLists
    const mailingList1 = await testPrisma.mailingList.create({
        data: {
            name: 'Newsletter Subscribers',
        },
    })

    const mailingList2 = await testPrisma.mailingList.create({
        data: {
            name: 'VIP Customers',
        },
    })

    // Create PersonsInMailingLists
    await testPrisma.personsInMailingLists.createMany({
        data: [
            { personId: person1.id, mailingListId: mailingList1.id },
            { personId: person1.id, mailingListId: mailingList2.id },
            { personId: person2.id, mailingListId: mailingList1.id },
        ],
    })

    // Create Blasts
    const blast1 = await testPrisma.blast.create({
        data: {
            name: 'Monthly Newsletter',
            authorId: admin1.id,
        },
    })

    const blast2 = await testPrisma.blast.create({
        data: {
            name: 'Special Promotion',
            authorId: admin2.id,
        },
    })

    // Create MailingListInBlast
    await testPrisma.mailingListInBlast.createMany({
        data: [
            { mailingListId: mailingList1.id, blastId: blast1.id },
            { mailingListId: mailingList2.id, blastId: blast2.id },
        ],
    })

    // Create Messages
    await testPrisma.message.createMany({
        data: [
            {
                content: 'Welcome to our monthly newsletter!',
                recipientId: person1.id,
                blastId: blast1.id,
                sentTime: new Date(),
                delivered: true,
            },
            {
                content: 'Special offer for our VIP customers!',
                recipientId: person2.id,
                blastId: blast2.id,
                sentTime: new Date(),
                delivered: false,
            },
        ],
    })

    console.log('Seed data created successfully!')
}

