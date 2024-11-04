import { Prisma } from "@prisma/client";
import MainRepositories from "../main.repositories";
import { DefaultArgs } from "@prisma/client/runtime/library";

class Cronograma_Repositories extends MainRepositories  {
    private pristamDB: Prisma.CronogramaDelegate<DefaultArgs>;

    constructor() {
        super();
        this.pristamDB = this.prismaClient.cronograma;
    }

    async update(label: string, id: number, userId: number): Promise<any> {
    
        const res = await this.pristamDB.update({
            where: {
                userId,
                id
            },
            data: {
                label,
            }
        });

        return res;

    }

    async delete(id: number, userId: number): Promise<any> {
        const res = await this.pristamDB.deleteMany({
            where: {
                id,
                userId
            }
        });

        return res;

    }

    async listCard(userId: number): Promise<any> {
    
        const res = await this.pristamDB.findMany({
            where: {
                userId
            },
            select: {
                label: true, 
                createdAt: true,
                id: true
            },
            orderBy: {
                id: "desc"
            }
        });

        return res;

    }

    async create(label: string, userId: number): Promise<any> {
        
        const res = await this.pristamDB.create({
            data: {
                label,
                userId,
                kanban: {
                    create: {
                        label
                    }
                }
            }
        });
        
        // const currentDate = new Date(); 
        // await this.prismaClient.$executeRaw`
        //     INSERT INTO Cronograma (label, userId, updatedAt)
        //     VALUES (${label}, ${userId}, ${currentDate});
        // `;

        // const _res: any = await this.prismaClient.$queryRaw`
        //     SELECT * FROM Cronograma WHERE id = LAST_INSERT_ID();
        // `

        // await this.prismaClient.$executeRaw`
        //     INSERT INTO Kanban (label, CronogramaId, updatedAt)
        //     VALUES (${label}, ${_res[0].id}, ${currentDate})
        // `;

        // const res: any = await this.prismaClient.$queryRaw`
        //     SELECT * FROM Kanban WHERE id = LAST_INSERT_ID();
        // `
        return res;

    }
}

export default Cronograma_Repositories;