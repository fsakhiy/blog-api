import { ErrorResponse, GeneralResponse, SuccessResponse } from "../../../common/responses/responses";
import { RoleModel } from "../model/role";
import { dbCreateNewRole } from "../repository/role";

export async function createNewRole(data: RoleModel): Promise<GeneralResponse> {
    const [status, resData] = await dbCreateNewRole(data)

    if(status) {
        return new SuccessResponse('data created', { id: resData.data }, null)
    } else {
        return new ErrorResponse('error creating data', resData.error)
    }
}