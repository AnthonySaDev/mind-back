import Useful_repositories from "@repositories/useful/useful.repositories";
import IBody from "src/api/types/IBody";
import IResponseServices from "src/api/types/IServices";


class Useful_services {
    async delete(body: IBody, params: any): Promise<IResponseServices> {
        const id = parseInt(params.id);

        const useful_repositories = new Useful_repositories();


        await useful_repositories.delete(id, body.auth.id);
        
        return {
            msg: "delete success",
            cache: false
        }
    }

    async update(body: IBody, params: any): Promise<IResponseServices> {
        const id = parseInt(params.id);

        if(isNaN(id)) 
            return {
                msg: "Id is required",
                error: true
            }

        const useful_repositories = new Useful_repositories();
        const response = await useful_repositories.update(body.data, id, body.auth.id);
        
        return {
            data: response,
            cache: false
        }
    }

    async list(body: IBody): Promise<IResponseServices> {
        const useful_repositories = new Useful_repositories();
        const response = await useful_repositories.list(body.auth.id);
        
        return {
            data: response,
            cache: false
        }
    }

    async create(body: IBody): Promise<IResponseServices> {
        console.log(body.data)

        const useful_repositories = new Useful_repositories();
        const response = await useful_repositories.create(body.data,  body.auth.id);
        
        return {
            data: response
        }
    } 
}

export default Useful_services;