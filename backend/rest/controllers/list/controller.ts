import express from "express";
import prisma from "../../../prisma/client";

const listRouter = express.Router();

listRouter.get('/all', async (req, res) => {
    const mailingLists = await prisma.mailingList.findMany();
    console.log(mailingLists)
    res.status(200).json(mailingLists);
});

export default listRouter;