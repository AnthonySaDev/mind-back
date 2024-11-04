import { Request, Response } from "express";
import IndicatorServices from "@services/indicators/indicators.services";


class IndicatorsController {
    async find(req: Request, res: Response): Promise<void> {
        try {
            const indicatorServices: IndicatorServices = new IndicatorServices();
            const indicator: any = await indicatorServices.find(req.body, req.params, req.query);

            if(indicator.error) {
                res.status(400).send(indicator);
                return;
            }

            res.status(200).send(indicator)
        }catch(error) {
            console.error(error);
            res.status( 400).send("error. Infos in log of server"); 
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const indicatorServices: IndicatorServices = new IndicatorServices();
            const indicator: any = await indicatorServices.update(req.body, req.params, req.query);

            if(indicator.error) {
                res.status(400).send(indicator);
                return;
            }

            res.status(200).send(indicator)
        }catch(error) {
            console.error(error);
            res.status( 400).send("error. Infos in log of server"); 
        }
    }
}

export default IndicatorsController;