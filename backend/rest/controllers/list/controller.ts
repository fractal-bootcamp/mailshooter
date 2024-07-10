import express from "express";
import prisma from "../../../prisma/client";

const listRouter = express.Router();

listRouter.get('/all', async (req, res) => {
    const mailingLists = await prisma.mailingList.findMany();
    // console.log(mailingLists)
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

    console.log("gang", req.body)

    if (added && added.length > 0) {
        const createObject: createOrDeleteParams = []
        added.forEach((personId: string) => {
            createObject.push({
                personId: personId,
                mailingListId: req.params.id
            })

        });

        console.log('Create object: ', createObject)

        await prisma.personsInMailingLists.createMany({
            data: createObject
        })

    }

    if (deleted && deleted.length > 0) {
        // const deleteObject: createOrDeleteParams = []
        // deleted.forEach((personId: string) => {
        //     deleteObject.push({
        //         personId: personId,
        //         mailingListId: req.params.id
        //     })

        // });

        // console.log('Delete object: ', deleteObject)

        await prisma.personsInMailingLists.deleteMany({
            where: {
                personId: {
                    in: deleted
                }
            }
        })

    }

    // // Add persons to the mailing list
    // if (added && added.length > 0) {
    //     await prisma.mailingList.update({
    //         where: {
    //             id: req.params.id,
    //         },
    //         data: {
    //             recipients: {
    //                 create: added.map((personId: string) => ({ id: personId })),
    //             },
    //         },
    //     });
    // }

    // // Remove persons from the mailing list
    // if (deleted && deleted.length > 0) {
    //     await prisma.mailingList.update({
    //         where: {
    //             id: req.params.id,
    //         },
    //         data: {
    //             recipients: {
    //                 delete: deleted.map((personId: string) => ({ id: personId })),
    //             },
    //         },
    //     });
    // }

    res.status(200).json(mailingList);

}

)
