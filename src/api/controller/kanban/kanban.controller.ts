import { Request, Response } from "express";
import Kanban_Services from "@services/kanban/kanban.service";

class Kanban_Controller {
    async list(req: Request, res: Response): Promise<void> {
        try {
            const kanban_Services: Kanban_Services = new Kanban_Services();
            const _res = await kanban_Services.list(req.body);

            res.status(201).send(_res);
        }catch(error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
}

export default Kanban_Controller;
