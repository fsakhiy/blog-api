import db from "../../../../lib/db/prisma";
import { RoleModel } from "../model/role";

export async function dbCreateNewRole(data: RoleModel): Promise<[boolean, {data: string, error: any}]> {    
    try {
        const role = await db.role.create({
            data: {
                roleName: data.roleName
            }
        })

        data.roleAccessId.forEach(async (id) => {
            await db.roleAccess.create({
                data: {
                    roleId: role.uuid,
                    roleAccessOptionId: id
                }
            })
        })
        return [true, {data: role.uuid, error: null}]
    } catch (e) {
        return [false, { data: "", error: e}]
    }
}