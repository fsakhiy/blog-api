import db from "../../../../lib/db/prisma";
import { UserModel } from "../model/user";
import * as bcrypt from 'bcrypt'

export async function dbCreateNewUser(userData: UserModel): Promise<[boolean, string]> {
    const hashedPassword = await bcrypt.hash(userData.password, 12)
    
    const data = await db.user.create({
        data: {
            name: userData.name,
            username: userData.username,
            email: userData.email,
            roleId: userData.roleId,
            password: hashedPassword
        }
    })

    return [ true, data.uuid ]
}