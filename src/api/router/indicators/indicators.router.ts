import { Router }  from "express";

import AuthMiddleware from "@middleware/Auth.middleware";
import IndicatorsController from "@controller/indicators/indicators.controller";

class IndicatorsRouter {
    main(): Router {
        const router: Router = Router();

        const indicatorsController: IndicatorsController = new IndicatorsController();
        const authMiddleware: AuthMiddleware = new AuthMiddleware();

        router.patch("/indicators/:date", authMiddleware.main, indicatorsController.update);
        router.get("/indicators/:date", authMiddleware.main, indicatorsController.find)

        return router;
    }
}

export default IndicatorsRouter;