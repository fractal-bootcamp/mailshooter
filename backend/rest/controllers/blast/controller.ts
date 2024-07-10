import express from "express";
import prisma from "../../../prisma/client";
import type { Person } from "@prisma/client";
import type { Message } from "postcss";

export const blastRouter = express.Router();




blastRouter.get("/all", async (req, res) => {
    const blasts = await prisma.blast.findMany({
        include: {
            messagesSent: true,
            lists: true,
        },
    });
    res.status(200).json(blasts);
});

blastRouter.get("/:id", async (req, res) => {
    const blast = await prisma.blast.findUnique({
        where: {
            id: req.params.id,
        },
        include: {
            messagesSent: true,
            lists: true,
        },
    });
    res.status(200).json(blast);
});

blastRouter.post("/send", async (req, res) => {
    const { content, lists, name } = req.body;

    // const authorId = req.user.id 




    // Fetch all target people from the specified lists
    const targetPeopleInAllLists = await Promise.all(lists.map(async (listId: string) => {
        const targetPeople = await prisma.personsInMailingLists.findMany({
            where: { mailingListId: listId },
            include: { person: true },
        });
        return targetPeople.map(entry => entry.person);
    }));

    const flattenedTargetPeople = targetPeopleInAllLists.flat();

    type MessageData = {
        content: string,
        recipientId: string,
        sentTime: Date,
    }

    const messagesToSend: MessageData[] = flattenedTargetPeople.map((targetPerson) => ({
        content: content,
        recipientId: targetPerson.id,
        sentTime: new Date(Date.now()),
    }));


    const blast = await prisma.blast.create({
        data: {
            name: name,
            lists: {
                create: lists.map((listId: string) => ({
                    mailingList: { connect: { id: listId } }
                })),
            },
            messagesSent: {
                createMany: {
                    data: messagesToSend
                }
            },
            // author: {
            //     connect: {
            //         id: authorId,
            //     }
            // }
        },
        include: {
            lists: true,
            messagesSent: true,
        }
    }
    );

    res.status(200).json(blast);
});





