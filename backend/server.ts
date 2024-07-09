
import express from "express";
import prisma from "./prisma/client";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
});




