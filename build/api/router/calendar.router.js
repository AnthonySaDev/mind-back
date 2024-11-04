"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const calendar_controller_1 = __importDefault(require("../controller/calendar.controller"));
const Auth_middleware_1 = __importDefault(require("../middleware/Auth.middleware"));
class Calendar_Router {
    main() {
        const router = (0, express_1.Router)();
        const authMiddleware = new Auth_middleware_1.default();
        const calendar_Controller = new calendar_controller_1.default();
        router.get("/calendar/:id/:month/:year", authMiddleware.main, calendar_Controller.find);
        router.get("/calendar/:id_/:id", authMiddleware.main, calendar_Controller.findFiles);
        router.delete("/calendar/:id_/:id", authMiddleware.main, calendar_Controller.delete);
        router.post("/calendar", authMiddleware.main, calendar_Controller.create);
        router.patch("/calendar/:id_/:id", authMiddleware.main, calendar_Controller.update);
        return router;
    }
}
exports.default = Calendar_Router;
//# sourceMappingURL=calendar.router.js.map