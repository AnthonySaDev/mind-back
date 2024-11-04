import { Router } from "express";

import AuthMiddleware from "@middleware/Auth.middleware";
import Kanban_Controller from "@controller/kanban/kanban.controller";

class Kanban_Router {
    main(): Router {
        const router: Router = Router();

        const authMiddleware: AuthMiddleware = new AuthMiddleware();
        const kanban_Controller: Kanban_Controller = new Kanban_Controller();

        router.get("/kanban", authMiddleware.main, kanban_Controller.list);

        return router;
    }
}

export default Kanban_Router;