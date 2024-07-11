import express from "express";
import type { AuthenticatedRequest } from "../../../utils/requireAuth";

export const authRouter = express.Router();

authRouter.get("/", (_req, res) => {
    res.send("hello base auth route")
})

authRouter.get("/login", (req: AuthenticatedRequest, res) => {
    const foundUser = req.user;
    if (foundUser) {
        res.status(200).json(foundUser);
    }
    else {
        res.status(401).json({ message: "No user found" });
    }


})