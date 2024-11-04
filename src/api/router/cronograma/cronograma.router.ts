import { Router } from "express";

import AuthMiddleware from "@middleware/Auth.middleware";
import Cronograma_Controller from "@controller/cronograma/cronograma.controller";

class Cronograma_Router {
    main(): Router {
        const router: Router = Router();

        const authMiddleware: AuthMiddleware = new AuthMiddleware();
        const cronograma_Controller: Cronograma_Controller = new Cronograma_Controller();

        router.post("/cronograma", authMiddleware.main, cronograma_Controller.create);
        router.get("/cronograma", authMiddleware.main, cronograma_Controller.listCard);
        router.delete("/cronograma/:id", authMiddleware.main, cronograma_Controller.delete);
        router.patch("/cronograma/:id", authMiddleware.main, cronograma_Controller.update);

        return router;
    }
}

export default Cronograma_Router;
