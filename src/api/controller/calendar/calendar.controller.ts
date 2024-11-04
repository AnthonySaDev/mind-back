import { Request, Response } from "express";
import Calendar_Services from "../../services/calendar/calendar.services";
import { ICalendar_res, IFiles } from "../../types/ICalendar";

class Calendar_Controller {

    async findFiles(req: Request, res: Response): Promise<void> {
        try {
            const calendar_Services: Calendar_Services = new Calendar_Services();
            const _res: Array<IFiles> | undefined = await calendar_Services.findFiles(req.body, req.params);
            
            res.status(200).send(_res); 
        }catch(error) {
            console.error(error);
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const calendar_Services: Calendar_Services = new Calendar_Services();
            const _res: ICalendar_res = await calendar_Services.delete(req.body, req.params);
            
            res.status(200).send(_res); 
        }catch(e) {
            console.error(e);
        }
    }

    async updateStatus(req: Request, res: Response): Promise<void> {
        try {
            const calendar_Services: Calendar_Services = new Calendar_Services();
            const _res: ICalendar_res = await calendar_Services.updateStatus(req.body, req.params);
            
            res.status(200).send(_res); 
        }catch(e) {
            console.error(e);
        }
    }


    async update(req: Request, res: Response): Promise<void> {
        try {
            const calendar_Services: Calendar_Services = new Calendar_Services();
            const _res: ICalendar_res = await calendar_Services.update(req.body, req.params);
            
            res.status(200).send(_res); 
        }catch(e) {
            console.error(e);
        }
    }

    async create(req: Request, res: Response): Promise<void> {
        try {
            const calendar_Services: Calendar_Services = new Calendar_Services();
            const _res: ICalendar_res = await calendar_Services.create(req.body);
            
            res.status(200).send(_res); 
        }catch(e) {
            console.error(e);
        }
    }

    async find(req: Request, res: Response): Promise<void> {
        try {
            const calendar_Services: Calendar_Services = new Calendar_Services();
            const _res: { infos: any, data: Array<ICalendar_res> } = await calendar_Services.find(req.body, req.params);
            
            res.status(200).send(_res);
        }catch(e) {
            console.error(e);
        }
    }
}

export default Calendar_Controller;
