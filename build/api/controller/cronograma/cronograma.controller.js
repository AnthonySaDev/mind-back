"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conograma_services_1 = __importDefault(require("@services/conograma/conograma.services"));
class Cronograma_Controller {
    async update(req, res) {
        try {
            const cronograma_Services = new conograma_services_1.default();
            const _res = await cronograma_Services.update(req.body, req.params);
            res.status(201).send(_res);
        }
        catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
    async delete(req, res) {
        try {
            const cronograma_Services = new conograma_services_1.default();
            const _res = await cronograma_Services.delete(req.body, req.params);
            res.status(201).send(_res);
        }
        catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
    async listCard(req, res) {
        try {
            const cronograma_Services = new conograma_services_1.default();
            const _res = await cronograma_Services.listCard(req.body, req.query);
            res.status(201).send(_res);
        }
        catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
    async create(req, res) {
        try {
            const cronograma_Services = new conograma_services_1.default();
            const _res = await cronograma_Services.create(req.body);
            res.status(201).send(_res);
        }
        catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
}
exports.default = Cronograma_Controller;
//# sourceMappingURL=cronograma.controller.js.map