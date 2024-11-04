"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const account_controller_1 = __importDefault(require("@controller/account/account.controller"));
class AccountRouter {
    main() {
        const router = (0, express_1.Router)();
        const accountController = new account_controller_1.default();
        router.patch("/account/login", accountController.login);
        router.post("/account", accountController.create);
        router.get("/account", accountController.infos);
        return router;
    }
}
exports.default = AccountRouter;
//# sourceMappingURL=account.router.js.map