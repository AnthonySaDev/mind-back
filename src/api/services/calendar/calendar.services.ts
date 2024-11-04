import moment from "moment-timezone";
import Calendar_Repositories from "../../repositories/calendar/calendar.repositories";
import IBody from "../../types/IBody";
import { ICalendar_Required, ICalendar_res, IFiles } from "../../types/ICalendar";

import { start_and_end_of_month } from "../../ultils/date";
import MainServices from "../main.services";

class Calendar_Services extends MainServices {
    constructor() {
        super()
    }

    async findFiles(body: IBody , params: any): Promise<Array<IFiles> | undefined> {
        const { id, id_ } = params;

        const calendar_Repositories: Calendar_Repositories = new Calendar_Repositories();
        const res: Array<IFiles> | undefined = await calendar_Repositories.findFiles(parseInt(id), parseInt(id_), body.auth.id);
        

        return res;
    }

    async delete(body: IBody , params: any): Promise<ICalendar_res> {
        const { id, id_ } = params;

        const calendar_Repositories: Calendar_Repositories = new Calendar_Repositories();
        const res: ICalendar_res = await calendar_Repositories.delete(parseInt(id), parseInt(id_), body.auth.id);

        this.redis!.del("calendar");

        return res;
    }

    async updateStatus(body: IBody, params: any): Promise<ICalendar_res> {
        const { id, id_ } = params;

        const calendar_Repositories: Calendar_Repositories = new Calendar_Repositories();
        const res: ICalendar_res = await calendar_Repositories.updateStatus(body.data.status, parseInt(id), parseInt(id_), body.auth.id);

        return res;
    }


    async update(body: IBody, params: any): Promise<ICalendar_res> {
        const { id, id_ } = params;

        console.log(params)

        const calendar_Repositories: Calendar_Repositories = new Calendar_Repositories();
        const res: ICalendar_res = await calendar_Repositories.update(body.data, parseInt(id), parseInt(id_), body.auth.id);

        // this.redis!.del("calendar");

        return res;
    }

    async create(body: IBody): Promise<ICalendar_res> {
        const calendar_Repositories: Calendar_Repositories = new Calendar_Repositories();

        const [year, month, day] = body.data.date.split("-");
        const { endMonth, startMonth, nowDate } = start_and_end_of_month(year, month, day);
        const codeRedis = `${startMonth}-${endMonth}-${body.data.id_}-${body.auth.id}`;

        const res: ICalendar_res = await calendar_Repositories.create(body.data, nowDate, body.auth.id);

        this.redis.del(codeRedis);
                        
        return res;
    }


    async find(body: IBody, params: any): Promise<{ infos: any, data: Array<ICalendar_res> }> {
        const { month, year, id, cache } = params as ICalendar_Required;
        
        const timezone = 'America/Sao_Paulo'
        const date = moment.tz(`${year}-${month}`, timezone);

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

        const calendar_Repositories: Calendar_Repositories = new Calendar_Repositories();
        const res: Array<any> = await calendar_Repositories.find(startMonth, endMonth, parseInt(id), body.auth.id);

        await this.redis.set(codeRedis, JSON.stringify(res));
        
        return {
            data: res,
            infos: {
                cache: false
            }
        }
    }
}

export default Calendar_Services;
