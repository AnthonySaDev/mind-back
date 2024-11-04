"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class MainRepositories {
    constructor() {
        this.prismaClient = new client_1.PrismaClient();
    }
}
exports.default = MainRepositories;
//# sourceMappingURL=main.repositories.js.map