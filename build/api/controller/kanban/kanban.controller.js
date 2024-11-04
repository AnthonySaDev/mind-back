"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kanban_service_1 = __importDefault(require("@services/kanban/kanban.service"));
class Kanban_Controller {
    async list(req, res) {
        try {
            const kanban_Services = new kanban_service_1.default();
            const _res = await kanban_Services.list(req.body);
            res.status(201).send(_res);
        }
        catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
}
exports.default = Kanban_Controller;
//# sourceMappingURL=kanban.controller.js.map