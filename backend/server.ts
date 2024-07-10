
import express from "express";
import cors from "cors";
import listRouter from "./rest/controllers/list/controller";
import bodyParser from "body-parser";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/dashboard/list", listRouter)

export default app;


