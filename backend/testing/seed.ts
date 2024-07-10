import { PrismaClient } from "@prisma/client"; // TODO create a test database with docker
import seedData from "./seedData";

console.log("DATABASE_URL:", process.env.DATABASE_URL); // Add this line for debugging

const testPrisma = new PrismaClient();


export const blastData = {
  blast1: {
    name: "Monthly Newsletter",
    authorId: seedData.admin1.id,
  },
  blast2: {
    name: "Special Promotion",
    authorId: seedData.admin2.id,
  },
}


export async function seedTestDatabase() {
  // Delete from tables with foreign key dependencies first
  await testPrisma.message.deleteMany({});
  await testPrisma.mailingListInBlast.deleteMany({});
  await testPrisma.personsInMailingLists.deleteMany({});

  // Then delete from the main tables
  await testPrisma.blast.deleteMany({});
  await testPrisma.mailingList.deleteMany({});
  await testPrisma.adminUser.deleteMany({});
  await testPrisma.person.deleteMany({});





  // Create AdminUsers
  const admin1 = await testPrisma.adminUser.create({
    data: seedData.admin1
  });

  const admin2 = await testPrisma.adminUser.create({
    data: seedData.admin2
  });

  // Create Persons
  const person1 = await testPrisma.person.create({
    data: seedData.person1
  });

  const person2 = await testPrisma.person.create({
    data: seedData.person2
  });

  // Create MailingLists
  const mailingList1 = await testPrisma.mailingList.create({
    data: seedData.mailingList1
  });

  const mailingList2 = await testPrisma.mailingList.create({
    data: seedData.mailingList2
  });


  // Create PersonsInMailingLists
  await testPrisma.personsInMailingLists.createMany({
    data: [
      { personId: person1.id, mailingListId: mailingList1.id },
      { personId: person1.id, mailingListId: mailingList2.id },
      { personId: person2.id, mailingListId: mailingList1.id },
    ],
  });

  // Create Blasts
  const blast1 = await testPrisma.blast.create({
    data: blastData.blast1
  });

  const blast2 = await testPrisma.blast.create({
    data: blastData.blast2
  });

  // Create MailingListInBlast
  await testPrisma.mailingListInBlast.createMany({
    data: [
      { mailingListId: mailingList1.id, blastId: blast1.id },
      { mailingListId: mailingList2.id, blastId: blast2.id },
    ],
  });

  // Create Messages
  await testPrisma.message.createMany({
    data: [
      {
        content: "Welcome to our monthly newsletter!",
        recipientId: person1.id,
        blastId: blast1.id,
        sentTime: new Date(),
        delivered: true,
      },
      {
        content: "Special offer for our VIP customers!",
        recipientId: person2.id,
        blastId: blast2.id,
        sentTime: new Date(),
        delivered: false,
      },
    ],
  });

  console.log("Seed data created successfully!");
}
