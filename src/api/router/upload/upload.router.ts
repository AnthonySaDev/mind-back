import { NextFunction, Request, Response, Router }  from "express";

import UploadFIlesMiddleware from "@middleware/UploadFIles.middleware";

class Upload_Router {
    main(): Router {
        const router: Router = Router();

        const uploadFIlesMiddleware = new UploadFIlesMiddleware();

        router.post("/files/upload", 
            (req: Request, res, next) => uploadFIlesMiddleware.main(req, res, next),
            (req: any, res: Response) => res.send({ files: req.files  }) // começar a receber a lista de arquivos pelo "body" 
        );

        return router;
    }
}

export default Upload_Router;