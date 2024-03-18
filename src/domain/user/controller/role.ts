import express, {NextFunction, Request, Response} from 'express'
import { RoleModel } from '../model/role'
import { validate } from '../../../common/validator/validation'
import { createRoleSchema } from '../../../common/validator/schema/role'
import { createNewRole } from '../service/role'

export const roleController = express.Router()

roleController.post('/role', (req: Request, res: Response, next: NextFunction) => {
    validate(req, res, next, createRoleSchema)
}, async (req: Request, res: Response) => {
    const reqData = req.body

    const parsedData: RoleModel = {
        roleName: reqData.roleName,
        roleAccessId: reqData.roleAccessIds
    }

    const data = await createNewRole(parsedData)

    res.send(data)
})