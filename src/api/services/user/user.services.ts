import { z } from "zod";
import bcrypt, { compare } from "bcrypt";

import UserRepositories from "../../repositories/user/account.repositories";
import { IUser, IUser_Create_Required, IUser_Create_Return_Services } from "../../types/IUser";
import MainServices from "../main.services";
import { generateToken } from "../../ultils/user/token";
import { decode } from "jsonwebtoken";


class UserServices extends MainServices {
    private userR: UserRepositories;

    constructor() {
        super()
        this.userR =  new UserRepositories();
    }

    async infos(token: any): Promise<any> {
        // token exist
        if(!token) return {
            error: true,
            messageError: "token is required"
        }

        // decode token 
        const infosOfToken = decode(token) as any;

        // find user
        const user: IUser | null = await this.userR.findUser(infosOfToken.email);
        
        // user not exist
        if(!token) return {
            error: true,
            messageError: "user not exist"
        }
        
        return {
            error: false,
            data: user
        }

    }

    async login(body: any) {

        // check infos of user.
        this.checkInfos(body);

        this.log(body)

        // find user.
        const user: IUser | null = await this.userR.findUser(body.email);
        if(!user) return {
            error: true,
            messageError: "user not exist"
        }

        if(!user) return {
            error: true,
            messageError: "user not exist"
        }

        this.log(user)
        this.log({passwordBBBB: body.password, passwordUUUU: user.password!})

        // check password.
        const password = await bcrypt.compare(body.password, user.password!);
        if(!password)  return {
            error: true,
            messageError: "password incorrect"
        }

        // delete password of object.
        delete user.password

        return {
            error: false,
            data: {
                token: generateToken(user),
                user
            }
        }
    }



    async create(body: any): Promise<IUser_Create_Return_Services> {

        // check infos of user.
        this.checkInfos(body);

        // check email.
        const exist = await this.userR.exist(body.email);
        if(exist) {
            return {
                error: true,
                messageError: "user exist"
            }
        }

        // transform password in hash.
        const passwordHash = await bcrypt.hash(body.password, 10);

        // create user.
        const user: IUser = await this.userR.create({
            email: body.email,
            name: body.name,
            password: passwordHash
        });

        // log user
        this.log(user);

        return {
            error: false,
            data: {
                token: generateToken(user),
                user
            }
        }
    }





    private async checkInfos(body: IUser_Create_Required) {
        const user_validated = z.object({
            name: z.string(),
            password: z.string(),
            email: z.string()
        }).safeParse(body);

        if(!user_validated.success) {
            const error = user_validated.error.errors.map(_d => {
                return {
                    message: _d.message,
                    path: _d.path[0]
                }
            })

            return {
                error: true,
                dataError: error,
                messageError: "infos is required"
            }
        }
    }
}


export default UserServices;
