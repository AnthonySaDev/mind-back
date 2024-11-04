import { Router } from "express";

import Calendar_Controller from "@controller/calendar/calendar.controller";
import AuthMiddleware from "@middleware/Auth.middleware";

class Calendar_Router {
    main(): Router {
        const router: Router = Router();

        const authMiddleware: AuthMiddleware = new AuthMiddleware();

        const calendar_Controller: Calendar_Controller = new Calendar_Controller();

        router.get("/calendar/:id/:month/:year", authMiddleware.main, calendar_Controller.find);
        router.get("/calendar/:id_/:id", authMiddleware.main, calendar_Controller.findFiles);
        router.delete("/calendar/:id_/:id", authMiddleware.main, calendar_Controller.delete);


        router.post("/calendar", authMiddleware.main, calendar_Controller.create);
        router.patch("/calendar/:id_/:id", authMiddleware.main, calendar_Controller.update);
        router.patch("/calendar/status/:id_/:id", authMiddleware.main, calendar_Controller.updateStatus);

        return router;
    }
}

export default Calendar_Router;
