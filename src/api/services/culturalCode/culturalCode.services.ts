import { decode } from "jsonwebtoken";
import CulturalCodeRepositories from "../../repositories/culturalCode/culturalCode.repositories";
import MainServices from "../main.services";



class CulturalCodeServices extends MainServices {
    private culturalCodeR: CulturalCodeRepositories;

    constructor() {
        super()
        this.culturalCodeR =  new CulturalCodeRepositories();
    }

    async update(body: any, params: any, token: any): Promise<any> {

        // token exist
        if(!token) return {
            error: true,
            messageError: "token is required"
        }

        // decode token 
        const infosOfToken = decode(token) as any;

        // check id
        const id = parseInt(params.id);
        if(isNaN(id)) return {
            error: true,
            messageError: "id is NaN"
        }

        // console.log(body)

        const culturalCode = await this.culturalCodeR.update(body, id, infosOfToken.id);

        return {
            error: false,
            data: {
                data: culturalCode
            }
        };
    }

    async findAll(token: any): Promise<any> {

        // token exist
        if(!token) return {
            error: true,
            messageError: "token is required"
        }

        // decode token 
        const infosOfToken = decode(token) as any;

        const culturalCode = await this.culturalCodeR.findAll(infosOfToken.id);

        return {
            error: false,
            data: {
                data: culturalCode
            }
        };
    }

    async find(params: any, token: any): Promise<any> {

        // token exist
        if(!token) return {
            error: true,
            messageError: "token is required"
        }

        // decode token 
        const infosOfToken = decode(token) as any;

        // check id
        const id = parseInt(params.id);
        if(isNaN(id)) return {
            error: true,
            messageError: "id is NaN"
        }

        const culturalCode = await this.culturalCodeR.find(id, infosOfToken.id);

        return {
            error: false,
            data: {
                data: culturalCode
            }
        };
    }

    async create(body: any, token: any): Promise<any> {

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

        const { id } = await this.culturalCodeR.create(body.label, infosOfToken.id);
        return {
            error: false,
            data: {
                menssage: "canvas created with success",
                idOfCanvas: id
            }
        };
    }
}


export default CulturalCodeServices;

