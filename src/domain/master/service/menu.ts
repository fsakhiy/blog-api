import { ErrorResponse, GeneralResponse, SuccessResponse } from "../../../common/responses/responses";
import { MenuOption } from "../model/menu";
import { dbCreateNewMenu, dbGetAllMenu } from "../repository/menu";

export async function getAllMenu(): Promise<GeneralResponse> {
    const [status, data] = await dbGetAllMenu()

    if(status) {
        return new SuccessResponse('data retrieved', data, null)
    } else {
        return new ErrorResponse('cannot retreieve data', data)
    }
}

export async function createNewMenu(data: MenuOption): Promise<GeneralResponse> {
    const [status, id] = await dbCreateNewMenu(data)

    if(status) {
        return new SuccessResponse('data created', { id: id }, null)
    } else {
        return new ErrorResponse('failed to create data', id)
    }
}