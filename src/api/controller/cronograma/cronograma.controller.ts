import { Request, Response } from "express";
import Cronograma_Services from "@services/conograma/conograma.services";

class Cronograma_Controller {
    async update(req: Request, res: Response): Promise<void> {
        try {
            const cronograma_Services: Cronograma_Services = new Cronograma_Services();
            const _res = await cronograma_Services.update(req.body, req.params);

            res.status(201).send(_res);
        }catch(error) { 
            console.error(error);
            res.status(500).send(error);
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const cronograma_Services: Cronograma_Services = new Cronograma_Services();
            const _res = await cronograma_Services.delete(req.body, req.params);

            res.status(201).send(_res);
        }catch(error) { 
            console.error(error);
            res.status(500).send(error);
        }
    }

    async listCard(req: Request, res: Response): Promise<void> {
        try {
            const cronograma_Services: Cronograma_Services = new Cronograma_Services();
            const _res = await cronograma_Services.listCard(req.body, req.query);

            res.status(201).send(_res);
        }catch(error) { 
            console.error(error);
            res.status(500).send(error);
        }
    }

    async create(req: Request, res: Response): Promise<void> {
        try {
            const cronograma_Services: Cronograma_Services = new Cronograma_Services();
            const _res = await cronograma_Services.create(req.body);

            res.status(201).send(_res);
        }catch(error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
}

export default Cronograma_Controller;
