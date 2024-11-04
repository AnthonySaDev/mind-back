import { NextFunction, Request, Response } from "express";
import { decode } from "jsonwebtoken";
import IBody from "../types/IBody";



class AuthMiddleware {
    main(req: Request, res: Response, next: NextFunction) {
        const token: any = req.headers["x-access-token"];

        if(!token) {
            res.status(401).send({
                error: true,
                messageError: "token is required"
            });
        }

        const infosToken = decode(token) as any;

        setTimeout(() => {
            const newBody: IBody = {
                auth: infosToken,
                data: req.body
            }

            req.body = newBody;
  
            next();
        }, infosToken.waitTime ? infosToken.waitTime : 0);
    }
}


export default AuthMiddleware;
