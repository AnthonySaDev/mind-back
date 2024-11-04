"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_repositories_1 = __importDefault(require("../main.repositories"));
class UserRepositories extends main_repositories_1.default {
    constructor() {
        super();
        this.pristamDB = this.prismaClient.user;
    }
    async findUser(email) {
        return this.prismaClient.user.findFirst({
            where: { email },
            select: {
                id: true,
                email: true,
                photo: true,
                name: true,
                blocked: true,
                password: true,
                waitTime: true
            }
        });
    }
    async exist(email) {
        const data = await this.prismaClient.user.count({
            where: { email }
        });
        return data === 0 ? false : true;
    }
    async create(data) {
        return this.pristamDB.create({
            data,
            select: {
                id: true,
                email: true,
                photo: true,
                name: true,
                blocked: true,
                waitTime: true
            }
        });
    }
}
exports.default = UserRepositories;
//# sourceMappingURL=account.repositories.js.map