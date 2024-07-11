import express from "express";

export const authRouter = express.Router();

authRouter.get("/", (_req, res) => {
    res.send("hello base auth route")
})