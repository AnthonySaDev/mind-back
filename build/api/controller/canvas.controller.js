"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_services_1 = __importDefault(require("../services/canvas/canvas.services"));
class CanvasController {
    async update(req, res) {
        try {
            const canvasServices = new canvas_services_1.default();
            const canvas = await canvasServices.update(req.body, req.params, req.headers["x-access-token"]);
            if (canvas.error) {
                res.status(400).send(canvas);
                return;
            }
            res.status(201).send(canvas);
        }
        catch (error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server");
        }
    }
    async find(req, res) {
        try {
            const canvasServices = new canvas_services_1.default();
            const canvas = await canvasServices.find(req.params, req.headers["x-access-token"]);
            if (canvas.error) {
                res.status(400).send(canvas);
                return;
            }
            res.status(201).send(canvas);
        }
        catch (error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server");
        }
    }
    async list(req, res) {
        try {
            const canvasServices = new canvas_services_1.default();
            const canvas = await canvasServices.list(req.headers["x-access-token"]);
            if (canvas.error) {
                res.status(400).send(canvas);
                return;
            }
            res.status(201).send(canvas);
        }
        catch (error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server");
        }
    }
    async create(req, res) {
        try {
            const canvasServices = new canvas_services_1.default();
            const canvas = await canvasServices.create(req.body, req.headers["x-access-token"]);
            if (canvas.error) {
                res.status(400).send(canvas);
                return;
            }
            res.status(201).send(canvas);
        }
        catch (error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server");
        }
    }
}
exports.default = CanvasController;
//# sourceMappingURL=canvas.controller.js.map