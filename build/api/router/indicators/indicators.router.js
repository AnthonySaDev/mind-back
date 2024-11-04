"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_middleware_1 = __importDefault(require("@middleware/Auth.middleware"));
const indicators_controller_1 = __importDefault(require("@controller/indicators/indicators.controller"));
class IndicatorsRouter {
    main() {
        const router = (0, express_1.Router)();
        const indicatorsController = new indicators_controller_1.default();
        const authMiddleware = new Auth_middleware_1.default();
        router.patch("/indicators/:date", authMiddleware.main, indicatorsController.update);
        router.get("/indicators/:date", authMiddleware.main, indicatorsController.find);
        return router;
    }
}
exports.default = IndicatorsRouter;
//# sourceMappingURL=indicators.router.js.map