import { ErrorResponse, GeneralResponse, SuccessResponse } from "../../../common/responses/responses"
import { UserModel } from "../model/user"
import { dbCreateNewUser } from "../repository/user"

async function getAllUser(): Promise<[boolean, string]> {
    return [false, "hello"]
}

export async function createNewUser(userData: UserModel): Promise<GeneralResponse> {

    
    const [status, data] = await dbCreateNewUser(userData)

    if(status) {
        return new SuccessResponse('data created', { id: data }, null)
    } else {
        return new ErrorResponse('cannot create data', data)
    }
}

export {getAllUser}