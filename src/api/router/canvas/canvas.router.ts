import { Router } from "express";

import CanvasController from "@controller/canvas/canvas.controller";

class CanvasRouter {
    main(): Router {
        const router: Router = Router();

        const canvasController: CanvasController = new CanvasController();
        router.post("/canvas", canvasController.create);
        router.get("/canvas", canvasController.list);
        router.get("/canvas/:id", canvasController.find);
        router.patch("/canvas/:id", canvasController.update);

        return router;
    }
}

export default CanvasRouter;
