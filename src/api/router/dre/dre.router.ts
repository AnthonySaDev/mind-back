import { Router }  from "express";

import DevController from "@controller/dev/dev.controller";
import Dre_Controller from "@controller/dre/dre.controller";
import AuthMiddleware from "@middleware/Auth.middleware";

class Dre_Router {
    main(): Router {
        const router: Router = Router();
        
        const authMiddleware: AuthMiddleware = new AuthMiddleware();

        const dre_Controller: Dre_Controller = new Dre_Controller();

        router.patch("/dre/:month/:year/:mode", authMiddleware.main, dre_Controller.save);
        router.get("/dre", authMiddleware.main, dre_Controller.find);
        router.get("/dre/:month/:year", authMiddleware.main, dre_Controller.find_date);

        return router;
    }
}

export default Dre_Router;
