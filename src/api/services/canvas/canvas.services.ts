import { z } from "zod";
import { decode } from "jsonwebtoken";

import MainServices from "../main.services";
import CanvasRepositories from "../../repositories/canvas/canvas.repositories";
import { IServices } from "../../types/IServices";
import { ICanvasList } from "../../types/ICanvas";


class CanvasServices extends MainServices {
    private canvasR: CanvasRepositories;

    constructor() {
        super()
        this.canvasR =  new CanvasRepositories();
    }

    async update(body: any, params: any, token: any) {
        // check id
        const id = parseInt(params.id);
        if(isNaN(id)) return {
            error: true,
            messageError: "id is NaN"
        }

        // token exist
        if(!token) return {
            error: true,
            messageError: "token is required"
        }

        // decode token 
        const infosOfToken = decode(token) as any;

        const canvas: ICanvasList | null = await this.canvasR.update(body, id, infosOfToken.id);

        return {
            error: false,
            data: canvas
        };
    }

    async find(params: any, token: any) {

        // check id
        const id = parseInt(params.id);
        if(isNaN(id)) return {
            error: true,
            messageError: "id is NaN"
        }

        // token exist
        if(!token) return {
            error: true,
            messageError: "token is required"
        }

        // decode token 
        const infosOfToken = decode(token) as any;

        const canvas: ICanvasList | null = await this.canvasR.find(id, infosOfToken.id);


        return {
            error: false,
            data: canvas
        };
    }

    async list(token: any) {

        // token exist
        if(!token) return {
            error: true,
            messageError: "token is required"
        }

        // decode token 
        const infosOfToken = decode(token) as any;
        
        const canvas: ICanvasList[] = await this.canvasR.list(infosOfToken.id);
        return {
            error: false,
            data: {
                list: canvas
            }
        };
    }

    async create(body: any, token: any): Promise<IServices> {

        // token exist
        if(!token) return {
            error: true,
            messageError: "token is required"
        }

        // decode token 
        const infosOfToken = decode(token) as any;

        // label exist
        if(!body.label) return {
            error: true,
            messageError: "label is required for create canvas"
        }

        // create canvas
        const canvas: number = await this.canvasR.create(body.label, infosOfToken.id);
        return {
            error: false,
            data: {
                menssage: "canvas created with success",
                idOfCanvas: canvas
            }
        };
    }

}


export default CanvasServices;
