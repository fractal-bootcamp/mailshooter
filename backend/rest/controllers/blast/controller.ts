import express from "express";
import prisma from "../../../prisma/client";

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

// blastRouter.get("/:id", async (req, res) => {
//     const blast = await prisma.blast.findUnique({
//         where: {
//             id: req.params.id,
//         },
//         include: {
//             messagesSent: true,
//             lists: true,
//         },
//     });
//     res.status(200).json(blast);
// });



