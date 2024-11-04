"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_middleware_1 = __importDefault(require("../middleware/Auth.middleware"));
const cronograma_controller_1 = __importDefault(require("../controller/cronograma.controller"));
class Cronograma_Router {
    main() {
        const router = (0, express_1.Router)();
        const authMiddleware = new Auth_middleware_1.default();
        const cronograma_Controller = new cronograma_controller_1.default();
        router.post("/cronograma", authMiddleware.main, cronograma_Controller.create);
        router.get("/cronograma", authMiddleware.main, cronograma_Controller.listCard);
        router.delete("/cronograma/:id", authMiddleware.main, cronograma_Controller.delete);
        return router;
    }
}
exports.default = Cronograma_Router;
//# sourceMappingURL=cronograma.router.js.map