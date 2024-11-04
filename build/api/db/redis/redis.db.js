"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
class RedisClient {
    constructor() { }
    static getInstance() {
        if (!RedisClient.instance) {
            RedisClient.instance = new ioredis_1.default({
                host: '191.252.214.127', //
                port: 6379,
                password: "123"
            });
            RedisClient.instance.on("connecting", () => {
                console.log("connecting");
            });
            RedisClient.instance.on("connect", () => {
                console.log("conectado");
            });
        }
        return RedisClient.instance;
    }
}
exports.default = RedisClient;
//# sourceMappingURL=redis.db.js.map