import { Prisma } from "@prisma/client";
import MainRepositories from "../main.repositories";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { ICalendar_Payload, ICalendar_res, IFiles } from "../../types/ICalendar";
import { NumericLiteral } from "typescript";

class Calendar_Repositories extends MainRepositories {
    private pristamDB: Prisma.CronogramaDelegate<DefaultArgs>;

    constructor() {
        super();
        this.pristamDB = this.prismaClient.cronograma;
    }

    async findFiles(id: number, cronogramaId: number, userId: number): Promise<Array<IFiles> | undefined> {
        
        
        console.log("cronogramaId");
        console.log(cronogramaId);
        console.log("cronogramaId");
        
        const res = await this.prismaClient.files.findMany({
            where: {
                calendarId: id
            },
            // where: {
            //     userId,
            //     id: cronogramaId
            // },
            // select: {
            //     calendar: {
            //         where: {
            //             id
            //         },
            //         select: {
            //             files: {
            //                 select: {
            //                     size: true,
            //                     filename: true,
            //                     path: true,
            //                     type: true
            //                 }
            //             }
            //         }
            //     }           
            // }
        });


        return res;

        console.log(res)

        // const res = await this.pristamDB.findFirst({
        //     where: {
        //         userId,
        //         id: cronogramaId
        //     },
        //     select: {
        //         calendar: {
        //             where: {
        //                 id
        //             },
        //             select: {
        //                 files: {
        //                     select: {
        //                         size: true,
        //                         filename: true,
        //                         path: true,
        //                         type: true
        //                     }
        //                 }
        //             }
        //         }           
        //     }
        // });

        // return res?.calendar[0]?.files;
    }

    async exist(year: string, month: string, userId: number): Promise<number> {
        return this.pristamDB.count({
            where: {
                userId
            }
        })
    }

    async delete(id: number, cronogramaId: number, userId: number): Promise<any> {
        return this.prismaClient.calendar.delete({
            where: {
                id       
            },
            
        });
    }


    // async updateMany(): Promise<void> {
    //     return this.prismaClient.calendar.updateMany({
    //         data: {
                
    //         }
    //     })
    // }

    async updateStatus(status: string, id: number, cronogramaId: number, userId: number): Promise<any> {
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
        })
    }

    async update(_data: ICalendar_Payload, id: number, cronogramaId: number, userId: number): Promise<any> {
        console.log(_data.everyDay)

        
        return this.prismaClient.calendar.update({
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
                everyDay: _data.everyDay,
                files: {
                    createMany: {
                        data: _data.files
                    }
                }
            }
        })
    }

    async create(_data: ICalendar_Payload, nowDate: string, userId: number): Promise<any> {
        console.log(_data.everyDay)

        return this.prismaClient.calendar.create({
            data: {
                cronogramaId: _data.cronogramaId,
                date: _data.date,
                text: _data.text,
                hours: _data.hours,
                status: _data.status,
                responsible: _data.responsible,
                label: _data.label,
                everyDay: _data.everyDay,
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

    async find(startDate: string, endDate: string, cronogramaId: number, userId: number): Promise<Array<any>> {
        return await this.prismaClient.calendar.findMany({
            where: {
                createdAt: {
                    gte: startDate,
                    lte: endDate,
                },
                cronogramaId: 2
            },
            orderBy: {
                id: "desc"
            }
        });
    }
}

export default Calendar_Repositories;
