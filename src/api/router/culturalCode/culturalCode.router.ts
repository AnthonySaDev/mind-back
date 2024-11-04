import { Request, Response, Router } from "express";

import CulturalCodeController from "@controller/culturalCode/culturalCode.controller";
import UploadFIlesMiddleware from "@middleware/UploadFIles.middleware";

class CulturalCodeRouter {
    main(): Router {
        const router: Router = Router();

        const culturalCodeController: CulturalCodeController = new CulturalCodeController();

        router.post("/culturalCode", culturalCodeController.create);
        router.get("/culturalCode/:id", culturalCodeController.find);
        router.get("/culturalCode", culturalCodeController.findAll);
        router.patch("/culturalCode/:id", culturalCodeController.update);

        const uploadFIlesMiddleware = new UploadFIlesMiddleware();

        router.post("/culturalCode/upload", 
            (req: Request, res, next) => uploadFIlesMiddleware.main(req, res, next),
            (req: any, res: Response) => res.send({ files: req.files  }) // começar a receber a lista de arquivos pelo "body" 
        );

        return router;
    }
}

export default CulturalCodeRouter;
