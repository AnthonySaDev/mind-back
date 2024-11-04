"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dev_controller_1 = __importDefault(require("../controller/dev.controller"));
class DevRouter {
    main() {
        const router = (0, express_1.Router)();
        const devController = new dev_controller_1.default();
        router.get("/dev/ping", devController.ping);
        return router;
    }
}
exports.default = DevRouter;
//# sourceMappingURL=dev.router.js.map