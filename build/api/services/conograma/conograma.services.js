"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_services_1 = __importDefault(require("@services/main.services"));
const cronograma_repositories_1 = __importDefault(require("../../repositories/cronograma/cronograma.repositories"));
const colors_cli_1 = __importDefault(require("colors-cli"));
class Cronograma_Services extends main_services_1.default {
    constructor() {
        super();
    }
    devLog(textStart, textEnd, data, color) {
        //@ts-ignore
        const start = colors_cli_1.default[color](`\n\n${textStart} SERVICES/CRONOGRAMA`.toLocaleUpperCase());
        //@ts-ignore
        const end = colors_cli_1.default[color](`${textEnd} SERVICES/CRONOGRAMA`.toLocaleUpperCase());
        console.log(start);
        console.log(data);
        console.timeEnd();
        console.log(end);
    }
    async update(body, params) {
        const { id } = params;
        const cronograma_Repositories = new cronograma_repositories_1.default();
        const res = await cronograma_Repositories.update(body.data.label, parseInt(id), body.auth.id);
        const codeRedis = body.auth.id.toString();
        await this.redis.del(codeRedis);
        return res;
    }
    async delete(body, params) {
        const { id } = params;
        const cronograma_Repositories = new cronograma_repositories_1.default();
        const res = await cronograma_Repositories.delete(parseInt(id), body.auth.id);
        const codeRedis = body.auth.id.toString();
        await this.redis.del(codeRedis);
        return res;
    }
    async listCard(body, query) {
        console.time();
        const codeRedis = body.auth.id.toString();
        if (query.cache === "true" || !query.cache) {
            const cacheResults = await this.redis.get(codeRedis);
            if (cacheResults) {
                const res = JSON.parse(cacheResults);
                this.devLog("response with cache -", "end -----------------", { code_redis: codeRedis, data_length: res.length }, "green");
                return {
                    data: res,
                    infos: {
                        cache: true
                    }
                };
            }
        }
        const cronograma_Repositories = new cronograma_repositories_1.default();
        const res = await cronograma_Repositories.listCard(body.auth.id);
        await this.redis.set(codeRedis, JSON.stringify(res));
        this.devLog("response without cache -", "end -----------------", { code_redis: codeRedis, data_length: res.length }, "yellow");
        return {
            data: res,
            infos: {
                cache: false
            }
        };
    }
    async create(body) {
        console.time();
        const label = body.data.label;
        const cronograma_Repositories = new cronograma_repositories_1.default();
        const res = await cronograma_Repositories.create(label, body.auth.id);
        const codeRedis = body.auth.id.toString();
        await this.redis.del(codeRedis);
        this.devLog(`created cronograma -`, "end -----------------", { code_redis: codeRedis, label }, "green");
        return res;
    }
}
exports.default = Cronograma_Services;
//# sourceMappingURL=conograma.services.js.map