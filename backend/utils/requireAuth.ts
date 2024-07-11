import express, { NextFunction, Request, Response } from "express";
import { clerkClient, } from '@clerk/clerk-sdk-node'

export const requireAuth = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    // headers = {... , authorization: Bearer <token>}
    console.log("headers", req.headers)
    const authToken = req.headers.authorization?.split(" ")[1]
    console.log(authToken)

    if (!authToken) {
        res.status(401).json({ message: "Unauthorized bro" });
        return;
    }

    try {

        const verifiedToken = await clerkClient.verifyToken(authToken)
        console.log(verifiedToken)



    }
    catch (e) {
        res.status(400).json({ error: e.message })
    }
}