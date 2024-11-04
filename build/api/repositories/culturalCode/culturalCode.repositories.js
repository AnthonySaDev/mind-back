"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_repositories_1 = __importDefault(require("../main.repositories"));
class CulturalCodeRepositories extends main_repositories_1.default {
    constructor() {
        super();
        this.pristamDB = this.prismaClient.culturalCode;
    }
    update(body, id, userId) {
        console.log(body.files);
        return this.pristamDB.update({
            where: { userId, id },
            data: {
                description: body.description,
                label: body.label,
                files: {
                    createMany: {
                        data: body.files ? body.files.map(({ path, filename, type, size }) => {
                            return { path, filename, type, size: size.toString() };
                        }) : {}
                    }
                }
            }
        });
    }
    findAll(userId) {
        return this.pristamDB.findMany({
            where: { userId },
            include: { files: true },
            orderBy: { id: "desc" }
        });
    }
    find(id, userId) {
        return this.pristamDB.findFirst({
            where: { id, userId },
            include: { files: true }
        });
    }
    create(label, userId) {
        return this.pristamDB.create({
            data: {
                label,
                description: "",
                userId
            },
            select: {
                id: true
            }
        });
    }
}
exports.default = CulturalCodeRepositories;
//# sourceMappingURL=culturalCode.repositories.js.map