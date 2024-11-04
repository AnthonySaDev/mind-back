import Useful_controller from "@controller/useful/useful.controller";
import AuthMiddleware from "@middleware/Auth.middleware";
import { Router } from "express";



class Useful_router {
    main(): Router {
        const router: Router = Router();

        const useful_controller = new Useful_controller();
        const authMiddleware: AuthMiddleware = new AuthMiddleware();

        router.post("/useful", authMiddleware.main, useful_controller.create);
        router.get("/useful", authMiddleware.main, useful_controller.list);
        router.patch("/useful/:id", authMiddleware.main, useful_controller.update);
        router.delete("/useful/:id", authMiddleware.main, useful_controller.delete);

        return router;
    }
}


export default Useful_router;
