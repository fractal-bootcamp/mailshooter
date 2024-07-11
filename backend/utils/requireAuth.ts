import express, { type NextFunction } from "express";
import { clerkClient } from '@clerk/clerk-sdk-node';
import prisma from "../prisma/client";

export const requireAuth = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
) => {
    const authToken = req.headers.authorization?.split(" ")[1];
    console.log('authToken', authToken);

    if (!authToken) {
        res.status(401).json({ message: "Unauthorized bro" });
        return;
    }

    try {
        const verifiedToken = await clerkClient.verifyToken(authToken, { jwtKey: process.env.CLERK_JWT_KEY });
        console.log('verifiedToken', verifiedToken);

        const dbUser = await prisma.adminUser.findUnique({
            where: {
                clerkId: verifiedToken.sub
            }
        })
        if (!dbUser) {
            const clerkUser = await clerkClient.users.getUser(verifiedToken.sub);
            const email = clerkUser.emailAddresses[0].emailAddress;
            const name = clerkUser.fullName || "";

            const newUser = await prisma.adminUser.create({
                data: {
                    clerkId: verifiedToken.sub,
                    email: email,
                    name: name,
                }
            })

            console.log('newAdminUser', newUser);

        }

        next();


    } catch (error) {
        console.error('Error verifying JWT:', error);
        res.status(401).json({ message: "Unauthorized bro" });
    }




    next();

};
