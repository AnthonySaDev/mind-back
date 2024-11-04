"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start_and_end_of_month = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
function start_and_end_of_month(year, month, day) {
    const timezone = 'America/Sao_Paulo';
    const date = moment_timezone_1.default.tz(`${year}-${month}-${day}`, timezone);
    const endMonth = date.endOf("month").toISOString();
    const startMonth = date.startOf("month").toISOString();
    const nowDate = date.toISOString();
    return {
        endMonth,
        startMonth,
        nowDate
    };
}
exports.start_and_end_of_month = start_and_end_of_month;
//# sourceMappingURL=date.js.map