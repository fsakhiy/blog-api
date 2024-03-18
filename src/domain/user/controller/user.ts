import express, { Request, Response, NextFunction } from 'express'
import { createNewUser, getAllUser } from '../service/user'
import { UserModel } from '../model/user'
import { validate } from '../../../common/validator/validation'
import { signupSchema } from '../../../common/validator/schema/user'

const userController = express.Router()

userController.get('/test', async (req: Request, res: Response) => {
    const [status, data] = await getAllUser()

    if(status) {
        res.send(data)
    } else if(!status) {
        res.status(500).send()
    }
})

userController.post('/sign-up', async (req: Request, res: Response, next: NextFunction) => {
    validate(req, res, next, signupSchema)
}, async (req: Request, res: Response) => {
    const reqBody = req.body
    
    const userData: UserModel = {
        name: reqBody.name,
        username: reqBody.username,
        email: reqBody.email,
        password: reqBody.password,
        roleId: reqBody.roleId
    }
    
    const data = await createNewUser(userData)

    res.send({ data: userData })
})

export { userController }