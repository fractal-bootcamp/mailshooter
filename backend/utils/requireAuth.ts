import express, { type NextFunction, type Request, type Response } from "express";
import { clerkClient } from '@clerk/clerk-sdk-node';
import prisma from "../prisma/client";
import type { AdminUser } from "@prisma/client";

interface AuthenticatedRequest extends Request {
    user?: AdminUser;
}

interface AuthenticatedResponse extends Response {
    user?: AdminUser;
}

export const requireAuth = async (
    req: AuthenticatedRequest,
    res: AuthenticatedResponse,
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
            req["user"] = newUser;
            return next();

        }

        req["user"] = dbUser;

        next();


    } catch (error) {
        console.error('Error verifying JWT:', error);
        res.status(401).json({ message: "Unauthorized bro" });
    }
};
