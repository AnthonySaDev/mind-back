import { Request, Response } from "express";


class DevController {
    ping(req: Request, res: Response) {
        res.send("pong");
    }
}

export default DevController;