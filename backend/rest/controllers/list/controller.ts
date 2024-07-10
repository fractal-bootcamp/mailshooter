import express from "express";
import prisma from "../../../prisma/client";

const listRouter = express.Router();

listRouter.get('/all', async (req, res) => {
    const mailingLists = await prisma.mailingList.findMany();
    res.status(200).json(mailingLists);
});

export default listRouter;

listRouter.get('/:id', async (req, res) => {
    const mailingList = await prisma.mailingList.findUnique({
        where: {
            id: req.params.id,
        },
        include: {
            recipients: true,
            blasts: true,
        }
    });
    res.status(200).json(mailingList);
});

listRouter.put('/:id', async (req, res) => {
    const { name, added, deleted } = req.body;

    type createOrDeleteParams = {
        personId: string,
        mailingListId: string
    }[]

    // Update the name
    const mailingList = await prisma.mailingList.update({
        where: {
            id: req.params.id,
        },
        data: {
            name: name,
        }
    });


    if (added && added.length > 0) {
        const createObject: createOrDeleteParams = []
        added.forEach((personId: string) => {
            createObject.push({
                personId: personId,
                mailingListId: req.params.id
            })

        });

        await prisma.personsInMailingLists.createMany({
            data: createObject
        })

    }

    if (deleted && deleted.length > 0) {

        await prisma.personsInMailingLists.deleteMany({
            where: {
                personId: {
                    in: deleted
                }
            }
        })

    }

    res.status(200).json(mailingList);

}

)
