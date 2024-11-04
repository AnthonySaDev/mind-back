"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_db_1 = __importDefault(require("@db/redis/redis.db"));
class MainServices {
    constructor() {
        this.redis = redis_db_1.default.getInstance();
    }
    log(data) {
        if (process.env.SHOW_LOGS) {
            console.log("\n\nSERVICES");
            console.log(data);
            console.log("SERVICES\n\n");
        }
    }
}
exports.default = MainServices;
//# sourceMappingURL=main.services.js.map