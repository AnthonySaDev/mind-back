"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kanban_repositories_1 = __importDefault(require("../../repositories/kanban/kanban.repositories"));
class Kanban_Services {
    async list(body) {
        const cronograma_Repositories = new kanban_repositories_1.default();
        const res = await cronograma_Repositories.list(body.auth.id);
        return res;
    }
}
exports.default = Kanban_Services;
//# sourceMappingURL=kanban.service.js.map