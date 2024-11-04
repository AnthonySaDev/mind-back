"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const canvas_controller_1 = __importDefault(require("../controller/canvas.controller"));
class CanvasRouter {
    main() {
        const router = (0, express_1.Router)();
        const canvasController = new canvas_controller_1.default();
        router.post("/canvas", canvasController.create);
        router.get("/canvas", canvasController.list);
        router.get("/canvas/:id", canvasController.find);
        router.patch("/canvas/:id", canvasController.update);
        return router;
    }
}
exports.default = CanvasRouter;
//# sourceMappingURL=canvas.router.js.map