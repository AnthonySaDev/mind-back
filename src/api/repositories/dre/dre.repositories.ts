import { Prisma } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import MainRepositories from "@repositories/main.repositories";
import { IDre, IDre_payload } from "src/api/types/Dre.types";

class Dre_Repositories extends MainRepositories {
    private db: Prisma.dreDelegate<DefaultArgs>;

    constructor() {
        super();
        this.db = this.prismaClient.dre;
    }

    async find_date(startDate: string, endDate: string, userId: number): Promise<IDre[]> {
        const response = await this.db.findMany({
            where: {
                userId,
                createdAt: {
                    gte: startDate,
                    lte: endDate
                }
            }
        });

        return response;
    }

    async find(userId: number): Promise<IDre[]> {
        const response = await this.db.findMany({
            where: {
                userId
            },
            select: {
                grossRevenue: true,
                tax: true,
                cost: true,
                expenses: true,
                reinvestments: true,
                personalExpenses: true,
                mode: true
            }
        });

        return response;
    }

    async update(data: IDre_payload, startMonth: string, mode: string, userId: number): Promise<number> {
        const response = await this.db.updateMany({
            where: {
                userId,
                mode,
                createdAt: startMonth
            },
            data
        });

        return response.count;
    }

    async create(data: IDre_payload, startMonth: string, mode: string, userId: number): Promise<number> {
        const response = await this.db.create({
            data: {
                ...data,
                mode,
                userId,
                createdAt: startMonth
            },
            select: {
                id: true
            }
        });

        return response.id;
    }

    async exist(startDate: string, endDate: string, userId: number, mode: string): Promise<boolean> {
        const response: number = await this.db.count({
            where: { 
                userId, 
                mode,
                createdAt: {
                    gte: startDate,
                    lte: endDate
                }
            }
        });

        return response === 0 ? false : true;
    }
}

export default Dre_Repositories;
