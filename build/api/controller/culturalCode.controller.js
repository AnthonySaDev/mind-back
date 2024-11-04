"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const culturalCode_services_1 = __importDefault(require("../services/culturalCode/culturalCode.services"));
class CulturalCodeController {
    async update(req, res) {
        try {
            const culturalCodeServices = new culturalCode_services_1.default();
            const culturalCode = await culturalCodeServices.update(req.body, req.params, req.headers["x-access-token"]);
            if (culturalCode.error) {
                res.status(400).send(culturalCode);
                return;
            }
            res.status(200).send(culturalCode);
        }
        catch (error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server");
        }
    }
    async findAll(req, res) {
        try {
            const culturalCodeServices = new culturalCode_services_1.default();
            const culturalCode = await culturalCodeServices.findAll(req.headers["x-access-token"]);
            if (culturalCode.error) {
                res.status(400).send(culturalCode);
                return;
            }
            res.status(200).send(culturalCode);
        }
        catch (error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server");
        }
    }
    async find(req, res) {
        try {
            const culturalCodeServices = new culturalCode_services_1.default();
            const culturalCode = await culturalCodeServices.find(req.params, req.headers["x-access-token"]);
            if (culturalCode.error) {
                res.status(400).send(culturalCode);
                return;
            }
            res.status(200).send(culturalCode);
        }
        catch (error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server");
        }
    }
    async create(req, res) {
        try {
            const culturalCodeServices = new culturalCode_services_1.default();
            const culturalCode = await culturalCodeServices.create(req.body, req.headers["x-access-token"]);
            if (culturalCode.error) {
                res.status(400).send(culturalCode);
                return;
            }
            res.status(201).send(culturalCode);
        }
        catch (error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server");
        }
    }
}
exports.default = CulturalCodeController;
//# sourceMappingURL=culturalCode.controller.js.map