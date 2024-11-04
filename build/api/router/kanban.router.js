"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_middleware_1 = __importDefault(require("../middleware/Auth.middleware"));
const kanban_controller_1 = __importDefault(require("../controller/kanban.controller"));
class Kanban_Router {
    main() {
        const router = (0, express_1.Router)();
        const authMiddleware = new Auth_middleware_1.default();
        const kanban_Controller = new kanban_controller_1.default();
        router.get("/kanban", authMiddleware.main, kanban_Controller.list);
        return router;
    }
}
exports.default = Kanban_Router;
//# sourceMappingURL=kanban.router.js.map