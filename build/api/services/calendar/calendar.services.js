"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const calendar_repositories_1 = __importDefault(require("../../repositories/calendar/calendar.repositories"));
const date_1 = require("../../ultils/date");
const main_services_1 = __importDefault(require("../main.services"));
class Calendar_Services extends main_services_1.default {
    constructor() {
        super();
    }
    async findFiles(body, params) {
        const { id, id_ } = params;
        const calendar_Repositories = new calendar_repositories_1.default();
        const res = await calendar_Repositories.findFiles(parseInt(id), parseInt(id_), body.auth.id);
        return res;
    }
    async delete(body, params) {
        const { id, id_ } = params;
        const calendar_Repositories = new calendar_repositories_1.default();
        const res = await calendar_Repositories.delete(parseInt(id), parseInt(id_), body.auth.id);
        this.redis.del("calendar");
        return res;
    }
    async updateStatus(body, params) {
        const { id, id_ } = params;
        const calendar_Repositories = new calendar_repositories_1.default();
        const res = await calendar_Repositories.updateStatus(body.data.status, parseInt(id), parseInt(id_), body.auth.id);
        return res;
    }
    async update(body, params) {
        const { id, id_ } = params;
        console.log(params);
        const calendar_Repositories = new calendar_repositories_1.default();
        const res = await calendar_Repositories.update(body.data, parseInt(id), parseInt(id_), body.auth.id);
        // this.redis!.del("calendar");
        return res;
    }
    async create(body) {
        const calendar_Repositories = new calendar_repositories_1.default();
        const [year, month, day] = body.data.date.split("-");
        const { endMonth, startMonth, nowDate } = (0, date_1.start_and_end_of_month)(year, month, day);
        const codeRedis = `${startMonth}-${endMonth}-${body.data.id_}-${body.auth.id}`;
        const res = await calendar_Repositories.create(body.data, nowDate, body.auth.id);
        this.redis.del(codeRedis);
        return res;
    }
    async find(body, params) {
        const { month, year, id, cache } = params;
        const timezone = 'America/Sao_Paulo';
        const date = moment_timezone_1.default.tz(`${year}-${month}`, timezone);
        const endMonth = date.endOf("month").toISOString();
        const startMonth = date.startOf("month").toISOString();
        const codeRedis = `${startMonth}-${endMonth}-${id}-${body.auth.id}`;
        const cacheResults = await this.redis.get(codeRedis);
        // if(cacheResults) {
        //     const res = JSON.parse(cacheResults);
        //     return {
        //         data: res,
        //         infos: {
        //             cache: true
        //         }
        //     }
        // }
        const calendar_Repositories = new calendar_repositories_1.default();
        const res = await calendar_Repositories.find(startMonth, endMonth, parseInt(id), body.auth.id);
        await this.redis.set(codeRedis, JSON.stringify(res));
        return {
            data: res[0].calendar,
            infos: {
                cache: false
            }
        };
    }
}
exports.default = Calendar_Services;
//# sourceMappingURL=calendar.services.js.map