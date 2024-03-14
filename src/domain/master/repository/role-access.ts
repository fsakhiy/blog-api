import db from "../../../../lib/db/prisma";
import { roleAccess } from "../model/role-access";

async function dbNewRoleAccess(access: string): Promise<[boolean, string]> {
    const data = await db.roleAccessOption.create({
        data: {
            access: access
        }
    })

    return [true, data.uuid]
}

async function dbGetAllRoleAccess(): Promise<[boolean, roleAccess[]]> {
    const data = await db.roleAccessOption.findMany()

    const formattedData: roleAccess[] = []
    data.map((access) => {
        formattedData.push({
            id: access.uuid,
            access: access.access
        })
    })

    return [true, formattedData]
}

async function dbDeleteRoleAccess(uuid: string): Promise<[boolean, string]> {
    const data = await db.roleAccessOption.delete({
        where: {
            uuid
        }
    })

    return [true, data.uuid]
}

export { dbNewRoleAccess, dbGetAllRoleAccess, dbDeleteRoleAccess }