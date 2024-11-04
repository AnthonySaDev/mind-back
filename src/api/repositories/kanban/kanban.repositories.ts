import { Prisma } from "@prisma/client";
import MainRepositories from "../main.repositories";
import { DefaultArgs } from "@prisma/client/runtime/library";



class Kanban_Repositories extends MainRepositories  {
    private pristamDB: Prisma.KanbanDelegate<DefaultArgs>;

    constructor() {
        super();
        this.pristamDB = this.prismaClient.kanban;
    }

    async list(userId: number): Promise<any> {
        const res = await this.pristamDB.findMany({
            where: {
                cronograma: {
                    userId
                }
            }
        });

        return res;        
    }
}

export default Kanban_Repositories;