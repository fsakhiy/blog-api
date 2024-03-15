import db from "../../../../lib/db/prisma";
import { MenuOption } from "../model/menu";

export async function dbCreateNewMenu(data: MenuOption): Promise<[boolean, string]> {
    const q = await db.menuOption.create({
        data: {
            href: data.href,
            name: data.name
        }
    })

    return [true, q.uuid]
}

export async function dbGetAllMenu(): Promise<[boolean, MenuOption[]]> {
    const formattedData: MenuOption[] = []
    const q = await db.menuOption.findMany()

    q.map((menu) => {
        formattedData.push({
            id: menu.uuid,
            href: menu.href,
            name: menu.name
        })
    })

    return [true, q]
}

