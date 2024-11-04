import { Prisma } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import jwt from "jsonwebtoken";

import MainRepositories from "../main.repositories";
import { IUser, IUser_Create_Required } from "../../types/IUser";


class UserRepositories extends MainRepositories {
    private pristamDB: Prisma.userDelegate<DefaultArgs>;

    constructor() {
        super();
        this.pristamDB = this.prismaClient.user;
    }

    async findUser(email: string): Promise<IUser | null> {
        return this.prismaClient.user.findFirst({
            where: { email },
            select: {
                id: true,
                email: true,
                photo: true,
                name: true,
                blocked: true,
                password: true,
                waitTime: true
            }
        });
    }

    async exist(email: string): Promise<boolean> {
        const data: number = await this.prismaClient.user.count({
            where: { email }
        })

        return data === 0 ? false : true;
    }

    async create(data: IUser_Create_Required): Promise<IUser> {
        return this.pristamDB.create({ 
            data,
            select: {
                id: true,
                email: true,
                photo: true,
                name: true,
                blocked: true,
                waitTime: true
            }
        });
    }
}


export default UserRepositories;

