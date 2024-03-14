import express, { Request, Response } from 'express'
import { getAllUser } from '../service/user'

const userController = express.Router()

userController.get('/test', async (req: Request, res: Response) => {
    const [status, data] = await getAllUser()

    if(status) {
        res.send(data)
    } else if(!status) {
        res.status(500).send()
    }
})

export { userController }