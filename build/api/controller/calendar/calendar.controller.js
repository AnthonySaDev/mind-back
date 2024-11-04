"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calendar_services_1 = __importDefault(require("../../services/calendar/calendar.services"));
class Calendar_Controller {
    async findFiles(req, res) {
        try {
            const calendar_Services = new calendar_services_1.default();
            const _res = await calendar_Services.findFiles(req.body, req.params);
            res.status(200).send(_res);
        }
        catch (error) {
            console.error(error);
        }
    }
    async delete(req, res) {
        try {
            const calendar_Services = new calendar_services_1.default();
            const _res = await calendar_Services.delete(req.body, req.params);
            res.status(200).send(_res);
        }
        catch (e) {
            console.error(e);
        }
    }
    async updateStatus(req, res) {
        try {
            const calendar_Services = new calendar_services_1.default();
            const _res = await calendar_Services.updateStatus(req.body, req.params);
            res.status(200).send(_res);
        }
        catch (e) {
            console.error(e);
        }
    }
    async update(req, res) {
        try {
            const calendar_Services = new calendar_services_1.default();
            const _res = await calendar_Services.update(req.body, req.params);
            res.status(200).send(_res);
        }
        catch (e) {
            console.error(e);
        }
    }
    async create(req, res) {
        try {
            const calendar_Services = new calendar_services_1.default();
            const _res = await calendar_Services.create(req.body);
            res.status(200).send(_res);
        }
        catch (e) {
            console.error(e);
        }
    }
    async find(req, res) {
        try {
            const calendar_Services = new calendar_services_1.default();
            const _res = await calendar_Services.find(req.body, req.params);
            res.status(200).send(_res);
        }
        catch (e) {
            console.error(e);
        }
    }
}
exports.default = Calendar_Controller;
//# sourceMappingURL=calendar.controller.js.map