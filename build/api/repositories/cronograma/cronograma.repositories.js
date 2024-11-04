"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_repositories_1 = __importDefault(require("../main.repositories"));
class Cronograma_Repositories extends main_repositories_1.default {
    constructor() {
        super();
        this.pristamDB = this.prismaClient.cronograma;
    }
    async update(label, id, userId) {
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
    async delete(id, userId) {
        console.log(id, userId);
        const res = await this.pristamDB.deleteMany({
            where: {
                id,
                userId
            }
        });
        return res;
    }
    async listCard(userId) {
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
    async create(label, userId) {
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
exports.default = Cronograma_Repositories;
//# sourceMappingURL=cronograma.repositories.js.map