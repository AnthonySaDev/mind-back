"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_repositories_1 = __importDefault(require("../main.repositories"));
class Calendar_Repositories extends main_repositories_1.default {
    constructor() {
        super();
        this.pristamDB = this.prismaClient.cronograma;
    }
    async findFiles(id, cronogramaId, userId) {
        var _a;
        console.log("cronogramaId");
        console.log(cronogramaId);
        console.log("cronogramaId");
        const res = await this.pristamDB.findFirst({
            where: {
                userId,
                id: cronogramaId
            },
            select: {
                calendar: {
                    where: {
                        id
                    },
                    select: {
                        files: {
                            select: {
                                size: true,
                                filename: true,
                                path: true,
                                type: true
                            }
                        }
                    }
                }
            }
        });
        return (_a = res === null || res === void 0 ? void 0 : res.calendar[0]) === null || _a === void 0 ? void 0 : _a.files;
    }
    async exist(year, month, userId) {
        return this.pristamDB.count({
            where: {
                userId
            }
        });
    }
    async delete(id, cronogramaId, userId) {
        return this.prismaClient.calendar.delete({
            where: {
                id,
                cronograma: {
                    id: cronogramaId
                }
            },
        });
    }
    // async updateMany(): Promise<void> {
    //     return this.prismaClient.calendar.updateMany({
    //         data: {
    //         }
    //     })
    // }
    async updateStatus(status, id, cronogramaId, userId) {
        return this.pristamDB.update({
            where: {
                userId,
                id: cronogramaId
            },
            data: {
                calendar: {
                    update: {
                        where: {
                            id
                        },
                        data: {
                            status
                        }
                    }
                }
            }
        });
    }
    async update(_data, id, cronogramaId, userId) {
        return this.pristamDB.update({
            where: {
                userId,
                id: cronogramaId
            },
            data: {
                calendar: {
                    update: {
                        where: {
                            id
                        },
                        data: {
                            text: _data.text,
                            hours: _data.hours,
                            status: _data.status,
                            responsible: _data.responsible,
                            label: _data.label,
                            date: _data.date,
                            files: {
                                createMany: {
                                    data: _data.files
                                }
                            }
                        }
                    }
                }
            }
        });
    }
    async create(_data, nowDate, userId) {
        return this.prismaClient.calendar.create({
            data: {
                cronogramaId: _data.cronogramaId,
                date: _data.date,
                text: _data.text,
                hours: _data.hours,
                status: _data.status,
                responsible: _data.responsible,
                label: _data.label,
                createdAt: nowDate,
                files: {
                    createMany: {
                        data: _data.files
                    }
                },
            },
            select: {
                id: true
            }
        });
    }
    async find(startDate, endDate, cronogramaId, userId) {
        return await this.pristamDB.findMany({
            where: {
                userId,
                id: cronogramaId
            },
            orderBy: {
                id: "desc"
            },
            select: {
                calendar: {
                    where: {
                        createdAt: {
                            gte: startDate,
                            lte: endDate,
                        }
                    }
                }
            }
        });
    }
}
exports.default = Calendar_Repositories;
//# sourceMappingURL=calendar.repositories.js.map