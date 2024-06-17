import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express();
const port: Number = 5000;

app.use("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({status: 200})
})

app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
})