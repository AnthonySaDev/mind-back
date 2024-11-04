import { Prisma } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import MainRepositories from "@repositories/main.repositories";

class Useful_repositories extends MainRepositories {
    private db: Prisma.UsefulDelegate<DefaultArgs>;

    constructor() {
        super();
        this.db = this.prismaClient.useful;
    }

    async delete(id: number, userId: number): Promise<void> {
        await this.db.delete({
            where: {
                id,
                userId
            }
        });
        
    }

    async update(data: { label: string, link: string }, id: number, userId: number): Promise<{ label: string, link: string }> {
        const response = await this.db.update({
            data,
            where: {
                id,
                userId
            }
        });

        return  response;
    }

    async list(userId: number): Promise<{ label: string, link: string }[]> {
        const response = await this.db.findMany({
            where: { userId },
            orderBy: { id: "desc" }
        });

        return response; 
    }

    async create(data: { label: string, link: string }, userId: number): Promise<{ id: number }> {
        const response = await this.db.create({
            data: {
                userId,
                ...data
            },
            select: {
                id: true
            }
        });
        
        return response;
    }   
}

export default Useful_repositories;
