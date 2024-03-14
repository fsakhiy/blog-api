import express, {Request, Response} from 'express'
import { createNewRoleAccess, deleteRoleAccess, getAllRoleAccess, testSetting } from '../service/settings'
import { ErrorResponse, SuccessResponse } from '../../../common/responses/responses'
import { roleAccess } from '../model/role-access'

export const masterController = express.Router()

masterController.get('/test', async (req: Request, res: Response) => {
    const [status, data] = await testSetting() 

    if(status) {
        res.send(new SuccessResponse('data retrieved', data, null))
    } else {
        res.status(500).send(new ErrorResponse('error', 'ask the developer'))
    }
})

masterController.post('/roleaccess', async (req: Request, res: Response) => {
    const reqData: roleAccess = { access: req.body.access }

    if(reqData.access === null ?? '') {
        res.status(400).send(new ErrorResponse('data not valid', { access: true }))
        return
    }
    
    const data = await createNewRoleAccess(reqData)

    res.send(data)
})

masterController.get('/roleaccess', async(req: Request, res: Response) => {
    const data = await getAllRoleAccess()

    res.send(data)
})

masterController.delete('/roleaccess', async(req: Request, res: Response) => {
    const id = req.body.uuid

    if(id == null || id == '') return new ErrorResponse('data invalid', { field: [ 'uuid' ]})
    
    const data = await deleteRoleAccess(id)

    res.send(data)
})