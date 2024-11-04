import { Router }  from "express";

import DevController from "@controller/dev/dev.controller";

class DevRouter {
    main(): Router {
        const router: Router = Router();

        const devController: DevController = new DevController();

        router.get("/dev/ping", devController.ping);

        return router;
    }
}

export default DevRouter;