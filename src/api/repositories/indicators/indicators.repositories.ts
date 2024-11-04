import { Prisma, PrismaClient, indicators } from "@prisma/client";
import MainRepositories from "../main.repositories";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { I_Indicators_Pyload } from "../../types/IIndicators.types";


class IndicatorsRepositories extends MainRepositories {
    private pristamDB: Prisma.indicatorsDelegate<DefaultArgs>;

    constructor() {
        super();
        this.pristamDB = this.prismaClient.indicators;
    }

    async findNowAndPrevius(dateNow: string, datePrevius: string, userId: number): Promise<I_Indicators_Pyload[] | null> {
        const res = await this.pristamDB.findMany({
            where: {
                userId,
                date: {
                    in: [ dateNow, datePrevius]
                }
            },
            select: {
                invoicing: true,
                customersServed: true,
                averageTicket: true,
                averageCost: true,
                budgetedVsRealized: true,
                actionPlan: true,
                productivity: true,
                customerSatisfaction: true,
                timeline: true,
                nps: true,
                customerEngagement: true,
                employeeSatisfaction: true,
                employeeEngagement: true,
                date: true,
                id: true
            }
        })
        
        return res
    } 

    async find(date: string, userId: number): Promise<I_Indicators_Pyload | null> {
        const res = await this.pristamDB.findFirst({
            where: { date, userId },
            select: {
                invoicing: true,
                customersServed: true,
                averageTicket: true,
                averageCost: true,
                budgetedVsRealized: true,
                actionPlan: true,
                productivity: true,
                customerSatisfaction: true,
                timeline: true,
                nps: true,
                customerEngagement: true,
                employeeSatisfaction: true,
                employeeEngagement: true,
                date: true,
                id: true
            }
        })
        
        return res
    } 

    async exist(date: string, userId: number): Promise<boolean> {
        const count = await this.pristamDB.count({
            where: { date, userId }
        })
        
        return count === 0 ? false : true;
    }

    async create(body: { userId: number, date: string }): Promise<number> {    
        const res = await this.pristamDB.create({
            data: body,
            select: { id: true }
        });

        return res.id;
    }

    async update(id: number, date: string, data: I_Indicators_Pyload, _id: number): Promise<number> {
        const res = await this.pristamDB.updateMany({
            where: { userId: id, date, id: _id },
            data
        });

        return res.count;
    }
}

export default IndicatorsRepositories;
