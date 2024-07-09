
import express from "express";
import cors from "cors";
import prisma from "./prisma/client";
import listRouter from "./rest/controllers/list/controller";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
});

app.use(cors());
app.use(express.json());


app.use("/dashboard/list", listRouter)




