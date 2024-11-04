"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_services_1 = __importDefault(require("../../services/user/user.services"));
class UserController {
    async infos(req, res) {
        try {
            const userServices = new user_services_1.default();
            const user = await userServices.infos(req.headers["x-access-token"]);
            if (user.error) {
                res.status(400).send(user);
                return;
            }
            res.status(200).send(user);
        }
        catch (error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server");
        }
    }
    async login(req, res) {
        try {
            const userServices = new user_services_1.default();
            const user = await userServices.login(req.body);
            if (user.error) {
                res.status(400).send(user);
                return;
            }
            res.status(200).send(user);
        }
        catch (error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server");
        }
    }
    async create(req, res) {
        try {
            const userServices = new user_services_1.default();
            const user = await userServices.create(req.body);
            if (user.error) {
                res.status(400).send(user);
                return;
            }
            res.status(201).send(user);
        }
        catch (error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server");
        }
    }
}
exports.default = UserController;
//# sourceMappingURL=account.controller.js.map