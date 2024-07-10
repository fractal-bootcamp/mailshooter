import { PrismaClient } from "@prisma/client"; // TODO create a test database with docker
import { blastData, listData, messageData } from "./seedData";

console.log("DATABASE_URL:", process.env.DATABASE_URL); // Add this line for debugging

const testPrisma = new PrismaClient();





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
    data: listData.admin1
  });

  const admin2 = await testPrisma.adminUser.create({
    data: listData.admin2
  });

  // Create Persons
  const person1 = await testPrisma.person.create({
    data: listData.person1
  });

  const person2 = await testPrisma.person.create({
    data: listData.person2
  });

  // Create MailingLists
  const mailingList1 = await testPrisma.mailingList.create({
    data: listData.mailingList1
  });

  const mailingList2 = await testPrisma.mailingList.create({
    data: listData.mailingList2
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
    data: {
      ...blastData.blast1,
      messagesSent: {
        create: messageData.message1
      },
    }
  });

  const blast2 = await testPrisma.blast.create({
    data: {
      ...blastData.blast2,
      messagesSent: {
        create: messageData.message2
      },


    }
  });

  // Create MailingListInBlast
  await testPrisma.mailingListInBlast.createMany({
    data: [
      { mailingListId: mailingList1.id, blastId: blast1.id },
      { mailingListId: mailingList2.id, blastId: blast2.id },
    ],
  });



  console.log("Seed data created successfully!");
}
