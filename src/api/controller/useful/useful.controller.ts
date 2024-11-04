import Useful_services from "@services/useful/useful.service";
import { Request, Response } from "express";



class Useful_controller {
    async delete(req: Request, res: Response): Promise<void> {
        try {
            const useful_services = new Useful_services();
            await useful_services.delete(req.body, req.params);

            res.sendStatus(200)
        }catch(error) {
            res.sendStatus(400)
            console.error(error);
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const useful_services = new Useful_services();
            const response = await useful_services.update(req.body, req.params);

            if(response.error)
                res.sendStatus(400);
                return;

            res.send(response);
        }catch(error) {
            console.error(error);
        }
    }

    async list(req: Request, res: Response): Promise<void> {
        try {
            const useful_services = new Useful_services();
            const response = await useful_services.list(req.body);

            res.send(response);
        }catch(error) {
            console.error(error);
        }
    }

    async create(req: Request, res: Response): Promise<void> {
        try {
            const useful_services = new Useful_services();
            console.log(req.body)
            const response = await useful_services.create(req.body);

            res.send(response);
        }catch(error) {
            console.error(error)
        }
    }
}

export default Useful_controller;
