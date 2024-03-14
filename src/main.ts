import express, {Express, Request, Response} from "express";
import dotenv from 'dotenv'
import { userController } from "./domain/user/controller/user";
import { masterController } from "./domain/master/controller/settings";

dotenv.config()
const app: Express = express()
app.use(express.json())
const port = process.env.PORT || 3001

app.get('/ping', (req: Request, res: Response) => {
    res.status(200).json({
        "message": "pong"
    })
})

app.use('/user', userController)
app.use('/master', masterController)

app.listen(port, () => { console.log(`[server] listening to port: ${port}`) })