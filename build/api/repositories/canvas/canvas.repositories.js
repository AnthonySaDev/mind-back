"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_repositories_1 = __importDefault(require("../main.repositories"));
class CanvasRepositories extends main_repositories_1.default {
    constructor() {
        super();
        this.pristamDB = this.prismaClient.canvas;
    }
    async update(data, id, userId) {
        console.log(id);
        return this.pristamDB.update({
            where: { userId, id },
            data
        });
    }
    async find(id, userId) {
        console.log(id);
        return this.pristamDB.findFirst({
            where: { userId, id
            }
        });
    }
    async list(userId) {
        return this.pristamDB.findMany({
            where: { userId },
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
    async create(label, userId) {
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
exports.default = CanvasRepositories;
//# sourceMappingURL=canvas.repositories.js.map