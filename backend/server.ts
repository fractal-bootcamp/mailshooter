import express from "express";
import cors from "cors";
import listRouter from "./rest/controllers/list/controller";
import bodyParser from "body-parser";
import { blastRouter } from "./rest/controllers/blast/controller";
import { requireAuth } from "./utils/requireAuth";
import { authRouter } from "./rest/controllers/auth/controller";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/auth", requireAuth, authRouter)
app.use("/dashboard/list", listRouter);
app.use("/dashboard/blast", blastRouter)

export default app;
