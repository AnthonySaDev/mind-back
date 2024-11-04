"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const indicators_repositories_1 = __importDefault(require("../../repositories/indicators/indicators.repositories"));
const main_services_1 = __importDefault(require("../main.services"));
class IndicatorServices extends main_services_1.default {
    constructor() {
        super();
        this.repositories = new indicators_repositories_1.default();
    }
    async find(body, params, query) {
        if (query.previous) {
            const data = await this.repositories.findNowAndPrevius(params.date, query.previous, body.auth.id);
            var now;
            var previous;
            data === null || data === void 0 ? void 0 : data.forEach((i) => {
                if (i.date === params.date) {
                    now = i;
                }
                else {
                    previous = i;
                }
            });
            return {
                error: false,
                data: {
                    now,
                    previous
                }
            };
        }
        const data = await this.repositories.find(params.date, body.auth.id);
        return {
            error: false,
            data: { data }
        };
    }
    async update(body, params, query) {
        const exist = await this.repositories.exist(params.date, body.auth.id);
        this.log(body);
        if (!exist) {
            this.log("criando indicadores");
            const newData = {
                userId: body.auth.id,
                date: params.date,
                ...body.data
            };
            this.log(newData);
            const userId = await this.repositories.create(newData);
            this.log(userId);
            return {
                error: false,
                data: {
                    msg: "criado com sucesso",
                    id: userId
                }
            };
        }
        const id = await this.repositories.update(body.auth.id, params.data, body.data, parseInt(query.id));
        return {
            error: false,
            data: {
                msg: "salvo com sucesso",
                id
            }
        };
    }
}
exports.default = IndicatorServices;
//# sourceMappingURL=indicators.services.js.map