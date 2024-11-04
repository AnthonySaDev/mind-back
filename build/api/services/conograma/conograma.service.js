"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cronograma_repositories_1 = __importDefault(require("../../repositories/cronograma/cronograma.repositories"));
class Cronograma_Services {
    async delete(body, params) {
        const { id } = params;
        const cronograma_Repositories = new cronograma_repositories_1.default();
        const res = await cronograma_Repositories.delete(parseInt(id), body.auth.id);
        return res;
    }
    async listCard(body) {
        const cronograma_Repositories = new cronograma_repositories_1.default();
        const res = await cronograma_Repositories.listCard(body.auth.id);
        return res;
    }
    async create(body) {
        const label = body.data.label;
        const cronograma_Repositories = new cronograma_repositories_1.default();
        const res = await cronograma_Repositories.create(label, body.auth.id);
        return res;
    }
}
exports.default = Cronograma_Services;
//# sourceMappingURL=conograma.service.js.map