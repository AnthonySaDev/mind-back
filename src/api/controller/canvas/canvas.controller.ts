import { Request, Response } from "express";
import CanvasServices from "../../services/canvas/canvas.services";
import { IServices } from "../../types/IServices";



class CanvasController {
    async update(req: Request, res: Response): Promise<void>  {
        try {
            const canvasServices: CanvasServices = new CanvasServices();
            const canvas: IServices = await canvasServices.update(req.body, req.params, req.headers["x-access-token"]);

            if(canvas.error) {
                res.status(400).send(canvas);
                return;
            }

            res.status(201).send(canvas)
        }catch(error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server"); 
        }
    }

    async find(req: Request, res: Response): Promise<void>  {
        try {
            const canvasServices: CanvasServices = new CanvasServices();
            const canvas: IServices = await canvasServices.find(req.params, req.headers["x-access-token"]);

            if(canvas.error) {
                res.status(400).send(canvas);
                return;
            }

            res.status(201).send(canvas)
        }catch(error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server"); 
        }
    }

    async list(req: Request, res: Response): Promise<void>  {
        try {
            const canvasServices: CanvasServices = new CanvasServices();
            const canvas: IServices = await canvasServices.list(req.headers["x-access-token"]);

            if(canvas.error) {
                res.status(400).send(canvas);
                return;
            }

            res.status(201).send(canvas)
        }catch(error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server"); 
        }
    }

    async create(req: Request, res: Response): Promise<void>  {
        try {
            const canvasServices: CanvasServices = new CanvasServices();
            const canvas: IServices = await canvasServices.create(req.body, req.headers["x-access-token"]);

            if(canvas.error) {
                res.status(400).send(canvas);
                return;
            }

            res.status(201).send(canvas)
        }catch(error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server"); 
        }
    }
}

export default CanvasController;
