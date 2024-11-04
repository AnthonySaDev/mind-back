import { Request, Response } from "express";
import UserServices from "../../services/user/user.services";
import { IUser_Create_Return_Services } from "../../types/IUser";

class UserController {
    async infos(req: Request, res: Response): Promise<void>  {
        try {
            const userServices: UserServices = new UserServices();
            const user: IUser_Create_Return_Services = await userServices.infos(req.headers["x-access-token"]);

            if(user.error) {
                res.status(400).send(user);
                return;
            }
             
            res.status(200).send(user);
        }catch(error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server");
        }
    }

    async login(req: Request, res: Response): Promise<void>  {
        try {
            const userServices: UserServices = new UserServices();
            const user: IUser_Create_Return_Services = await userServices.login(req.body);

            if(user.error) {
                res.status(400).send(user);
                return;
            }
             
            res.status(200).send(user);
        }catch(error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server");
        }
    }

    async create(req: Request, res: Response): Promise<void> {
        try {
            const userServices: UserServices = new UserServices();
            const user: IUser_Create_Return_Services = await userServices.create(req.body);

            if(user.error) {
                res.status(400).send(user);
                return;
            }
             
            res.status(201).send(user);
        }catch(error) {
            console.error(error);
            res.status(400).send("error. Infos in log of server");
        }
    }
}

export default UserController;