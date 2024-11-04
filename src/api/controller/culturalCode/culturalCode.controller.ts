import { Request, Response } from "express";
import CulturalCodeServices from "@services/culturalCode/culturalCode.services";


class CulturalCodeController {
    async update(req: Request, res: Response): Promise<void> {
        try {
            const culturalCodeServices: CulturalCodeServices = new CulturalCodeServices();
            const culturalCode: any = await culturalCodeServices.update(req.body, req.params, req.headers["x-access-token"]);
            
            if(culturalCode.error) {
                res.status(400).send(culturalCode);
                return;
            }

            res.status(200).send(culturalCode)
        }catch(error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server"); 
        }
    }

    async findAll(req: Request, res: Response): Promise<void> {
        try {
            const culturalCodeServices: CulturalCodeServices = new CulturalCodeServices();
            const culturalCode: any = await culturalCodeServices.findAll(req.headers["x-access-token"]);
            
            if(culturalCode.error) {
                res.status(400).send(culturalCode);
                return;
            }

            res.status(200).send(culturalCode)
        }catch(error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server"); 
        }
    }

    async find(req: Request, res: Response): Promise<void> {
        try {
            const culturalCodeServices: CulturalCodeServices = new CulturalCodeServices();
            const culturalCode: any = await culturalCodeServices.find(req.params, req.headers["x-access-token"]);
            
            if(culturalCode.error) {
                res.status(400).send(culturalCode);
                return;
            }

            res.status(200).send(culturalCode);
        }catch(error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server"); 
        }
    }

    async create(req: Request, res: Response): Promise<void> {
        try {
            const culturalCodeServices: CulturalCodeServices = new CulturalCodeServices();
            const culturalCode: any = await culturalCodeServices.create(req.body, req.headers["x-access-token"]);
            
            if(culturalCode.error) {
                res.status(400).send(culturalCode);
                return;
            }

            res.status(201).send(culturalCode)
        }catch(error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server"); 
        }
    }
}

export default CulturalCodeController;
