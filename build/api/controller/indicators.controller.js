"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const indicators_services_1 = __importDefault(require("../services/indicators/indicators.services"));
class IndicatorsController {
    async find(req, res) {
        try {
            const indicatorServices = new indicators_services_1.default();
            const indicator = await indicatorServices.find(req.body, req.params, req.query);
            if (indicator.error) {
                res.status(400).send(indicator);
                return;
            }
            res.status(200).send(indicator);
        }
        catch (error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server");
        }
    }
    async update(req, res) {
        try {
            const indicatorServices = new indicators_services_1.default();
            const indicator = await indicatorServices.update(req.body, req.params, req.query);
            if (indicator.error) {
                res.status(400).send(indicator);
                return;
            }
            res.status(200).send(indicator);
        }
        catch (error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server");
        }
    }
}
exports.default = IndicatorsController;
//# sourceMappingURL=indicators.controller.js.map