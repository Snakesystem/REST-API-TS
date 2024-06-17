import express, { Application, NextFunction, Request, Response } from "express";
import { routes } from "./routes";
import { logger } from "./utils/loger";
import bodyParser from "body-parser";
import cors from "cors"

const app: Application = express();
const port: Number = 5000;

// parser body request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// cors access handler
app.use(cors())
app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Method', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
})

routes(app)

app.listen(port, () => {
    logger.info(`Server listen on port ${port}`);
});