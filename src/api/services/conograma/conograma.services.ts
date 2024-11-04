import MainServices from "@services/main.services";
import Cronograma_Repositories from "../../repositories/cronograma/cronograma.repositories";
import IBody from "../../types/IBody";
import colorsCli from "colors-cli";

class Cronograma_Services extends MainServices {
    constructor() {
        super();
    }   

    private devLog(textStart: string, textEnd: string, data: any, color: string) {
        //@ts-ignore
        const start = colorsCli[color](`\n\n${textStart} SERVICES/CRONOGRAMA`.toLocaleUpperCase());
        //@ts-ignore
        const end = colorsCli[color](`${textEnd} SERVICES/CRONOGRAMA`.toLocaleUpperCase());
        
        console.log(start);
        console.log(data);
        console.timeEnd();
        console.log(end);
    }

    async update(body: IBody, params: any): Promise<any> {
        const { id } = params;

        const cronograma_Repositories: Cronograma_Repositories = new Cronograma_Repositories();
        const res = await cronograma_Repositories.update(body.data.label, parseInt(id), body.auth.id);
        
        const codeRedis = body.auth.id.toString();
        await this.redis.del(codeRedis);
        
        return res;
    }
    
    async delete(body: IBody, params: any): Promise<any> {
        const { id } = params;

        const cronograma_Repositories: Cronograma_Repositories = new Cronograma_Repositories();
        const res = await cronograma_Repositories.delete(parseInt(id), body.auth.id);
        
        const codeRedis = body.auth.id.toString();
        await this.redis.del(codeRedis);
        
        return res;
    }

    async listCard(body: IBody, query: any): Promise<any> {
        console.time();
        
        const codeRedis = body.auth.id.toString();

        if(query.cache === "true" || !query.cache) {
            const cacheResults = await this.redis.get(codeRedis);

            if(cacheResults) {
                const res = JSON.parse(cacheResults);
                
                this.devLog(
                    "response with cache -", 
                    "end -----------------", 
                    { code_redis:  codeRedis, data_length: res.length }, 
                    "green"
                );

                return {
                    data: res,
                    infos: {
                        cache: true
                    }
                }
            }
        }

        const cronograma_Repositories: Cronograma_Repositories = new Cronograma_Repositories();
        const res = await cronograma_Repositories.listCard(body.auth.id);

        await this.redis.set(codeRedis, JSON.stringify(res));
        
        this.devLog(
            "response without cache -", 
            "end -----------------", 
            { code_redis:   codeRedis, data_length: res.length }, 
            "yellow"
        );

        return {
            data: res,
            infos: {
                cache: false
            }
        }
    }

    async create(body: IBody): Promise<any> {
        console.time();
        
        const label: string = body.data.label;
    
        const cronograma_Repositories: Cronograma_Repositories = new Cronograma_Repositories();
        const res = await cronograma_Repositories.create(label, body.auth.id);
        
        const codeRedis = body.auth.id.toString();
        await this.redis.del(codeRedis);

        this.devLog(
            `created cronograma -`, 
            "end -----------------", 
            { code_redis: codeRedis, label }, 
            "green"
        );
        
        return res;
    }
}

export default Cronograma_Services;