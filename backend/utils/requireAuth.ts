import express, { type NextFunction } from "express";
import { clerkClient } from '@clerk/clerk-sdk-node';

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
        next();
    } catch (error) {
        console.error('Error verifying JWT:', error);
        res.status(401).json({ message: "Unauthorized bro" });
    }
};
