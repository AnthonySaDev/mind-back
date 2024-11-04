"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const bcrypt_1 = __importDefault(require("bcrypt"));
const account_repositories_1 = __importDefault(require("../../repositories/user/account.repositories"));
const main_services_1 = __importDefault(require("../main.services"));
const token_1 = require("../../ultils/user/token");
const jsonwebtoken_1 = require("jsonwebtoken");
class UserServices extends main_services_1.default {
    constructor() {
        super();
        this.userR = new account_repositories_1.default();
    }
    async infos(token) {
        // token exist
        if (!token)
            return {
                error: true,
                messageError: "token is required"
            };
        // decode token 
        const infosOfToken = (0, jsonwebtoken_1.decode)(token);
        // find user
        const user = await this.userR.findUser(infosOfToken.email);
        // user not exist
        if (!token)
            return {
                error: true,
                messageError: "user not exist"
            };
        return {
            error: false,
            data: user
        };
    }
    async login(body) {
        // check infos of user.
        this.checkInfos(body);
        this.log(body);
        // find user.
        const user = await this.userR.findUser(body.email);
        if (!user)
            return {
                error: true,
                messageError: "user not exist"
            };
        if (!user)
            return {
                error: true,
                messageError: "user not exist"
            };
        this.log(user);
        this.log({ passwordBBBB: body.password, passwordUUUU: user.password });
        // check password.
        const password = await bcrypt_1.default.compare(body.password, user.password);
        if (!password)
            return {
                error: true,
                messageError: "password incorrect"
            };
        // delete password of object.
        delete user.password;
        return {
            error: false,
            data: {
                token: (0, token_1.generateToken)(user),
                user
            }
        };
    }
    async create(body) {
        // check infos of user.
        this.checkInfos(body);
        // check email.
        const exist = await this.userR.exist(body.email);
        if (exist) {
            return {
                error: true,
                messageError: "user exist"
            };
        }
        // transform password in hash.
        const passwordHash = await bcrypt_1.default.hash(body.password, 10);
        // create user.
        const user = await this.userR.create({
            email: body.email,
            name: body.name,
            password: passwordHash
        });
        // log user
        this.log(user);
        return {
            error: false,
            data: {
                token: (0, token_1.generateToken)(user),
                user
            }
        };
    }
    async checkInfos(body) {
        const user_validated = zod_1.z.object({
            name: zod_1.z.string(),
            password: zod_1.z.string(),
            email: zod_1.z.string()
        }).safeParse(body);
        if (!user_validated.success) {
            const error = user_validated.error.errors.map(_d => {
                return {
                    message: _d.message,
                    path: _d.path[0]
                };
            });
            return {
                error: true,
                dataError: error,
                messageError: "infos is required"
            };
        }
    }
}
exports.default = UserServices;
//# sourceMappingURL=user.services.js.map