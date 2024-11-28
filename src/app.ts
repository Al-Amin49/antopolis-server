import express, { Application, Request, Response } from "express";
import cors from "cors";
import { animalRoute } from "./app/modules/animal/animal.route";
import { categoryRoute } from "./app/modules/category/category.route";

const app: Application = express();

//adding parsers
app.use(express.json());
app.use(cors());

//application routes

app.use('/api/animal',animalRoute);
app.use('/api/category', categoryRoute)

//health route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});


export default app;
