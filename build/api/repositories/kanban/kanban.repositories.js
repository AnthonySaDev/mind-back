"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_repositories_1 = __importDefault(require("../main.repositories"));
class Kanban_Repositories extends main_repositories_1.default {
    constructor() {
        super();
        this.pristamDB = this.prismaClient.kanban;
    }
    async list(userId) {
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
exports.default = Kanban_Repositories;
//# sourceMappingURL=kanban.repositories.js.map