"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_repositories_1 = __importDefault(require("../main.repositories"));
class IndicatorsRepositories extends main_repositories_1.default {
    constructor() {
        super();
        this.pristamDB = this.prismaClient.indicators;
    }
    async findNowAndPrevius(dateNow, datePrevius, userId) {
        const res = await this.pristamDB.findMany({
            where: {
                userId,
                date: {
                    in: [dateNow, datePrevius]
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
        });
        return res;
    }
    async find(date, userId) {
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
        });
        return res;
    }
    async exist(date, userId) {
        const count = await this.pristamDB.count({
            where: { date, userId }
        });
        return count === 0 ? false : true;
    }
    async create(body) {
        const res = await this.pristamDB.create({
            data: body,
            select: { id: true }
        });
        return res.id;
    }
    async update(id, date, data, _id) {
        const res = await this.pristamDB.updateMany({
            where: { userId: id, date, id: _id },
            data
        });
        return res.count;
    }
}
exports.default = IndicatorsRepositories;
//# sourceMappingURL=indicators.repositories.js.map