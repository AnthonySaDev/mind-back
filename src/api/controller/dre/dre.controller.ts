import Dre_Services from "@services/dre/dre_services";
import { Request, Response } from "express";



class Dre_Controller {
    async find_date(req: Request, res: Response): Promise<void> {
        try {
            const dre_Services: Dre_Services = new Dre_Services();
            const response = await dre_Services.find_date(req.body, req.params);

            res.send({ ...response });
        }catch(error) {
            console.error(error);
        }
    }

    async find(req: Request, res: Response): Promise<void> {
        try {
            const dre_Services: Dre_Services = new Dre_Services();
            const response = await dre_Services.find(req.body);

            res.send({ ...response });
        }catch(error) {
            console.error(error);
            res.sendStatus(500);
        }
    }

    async save(req: Request, res: Response): Promise<void> {
        try {
            const dre_Services: Dre_Services = new Dre_Services();
            const response = await dre_Services.save(req.body, req.params);

            res.send({ dri_id: response });
        }catch(error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
}

export default Dre_Controller;
