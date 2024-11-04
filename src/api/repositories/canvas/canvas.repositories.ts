import { Prisma } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

import MainRepositories from "../main.repositories";
import { ICanvasList, ICanvas_Create_Required } from "../../types/ICanvas";


class CanvasRepositories extends MainRepositories {
    private pristamDB: Prisma.canvasDelegate<DefaultArgs>;

    constructor() {
        super();
        this.pristamDB = this.prismaClient.canvas;
    }

    async update(data: ICanvas_Create_Required, id: number, userId: number): Promise<ICanvasList | null> {
        console.log(id)
        return this.pristamDB.update({
            where: {userId, id},
            data
        });
    }

    async find(id: number, userId: number): Promise<ICanvasList | null> {
        console.log(id)
        return this.pristamDB.findFirst({
            where: {userId, id
            }
        });
    }

    async list(userId: number): Promise<ICanvasList[]> {
        return this.pristamDB.findMany({
            where: {userId},
            select: {
                id: true,
                label: true,
                updatedAt: true, 
                createdAt: true
            },
            orderBy: {
                id: "desc"
            }
        });
    }

    async create(label: string, userId: number): Promise<number> {
        const { id } = await this.pristamDB.create({
            data: {
                label,
                userId
            },
            select: {
                id: true
            }
        });

        return id;
    }


}


export default CanvasRepositories;

