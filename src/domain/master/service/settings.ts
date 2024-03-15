import { ErrorResponse, GeneralResponse, SuccessResponse } from "../../../common/responses/responses"
import { roleAccess } from "../model/role-access"
import { dbDeleteRoleAccess, dbGetAllRoleAccess, dbNewRoleAccess } from "../repository/role-access"

async function testSetting(): Promise<[boolean, any]> {
    return [true, "this is message from master service"]
}

async function createNewRoleAccess(roleData: roleAccess): Promise<GeneralResponse> {
    const [status, data] = await dbNewRoleAccess(roleData.access)

    if(status) {
        return new SuccessResponse('data retrived', data, null)
    } else {
        return new ErrorResponse('error', data)
    }
}

async function getAllRoleAccess(): Promise<GeneralResponse> {
    const [status, data] = await dbGetAllRoleAccess()

    if(status) {
        return new SuccessResponse('data retrived', data, null)
    } else {
        return new ErrorResponse('error', data)
    }
}

async function deleteRoleAccess(uuid: string): Promise<GeneralResponse> {
    const [status, data ] = await dbDeleteRoleAccess(uuid)
    
    if(status) {
        return new SuccessResponse('data retrived', data, null)
    } else {
        return new ErrorResponse('error', data)
    }
}



export { testSetting, createNewRoleAccess, getAllRoleAccess, deleteRoleAccess }