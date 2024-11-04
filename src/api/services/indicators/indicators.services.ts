import IndicatorsRepositories from "../../repositories/indicators/indicators.repositories";
import IBody from "../../types/IBody";
import { I_Indicators_Pyload } from "../../types/IIndicators.types";
import { IServices } from "../../types/IServices";
import MainServices from "../main.services";


class IndicatorServices extends MainServices {
    private repositories: IndicatorsRepositories;

    constructor() {
        super()
        this.repositories = new IndicatorsRepositories();
    }

    async find(body: IBody, params: any, query: any): Promise<IServices> {

        if(query.previous) {
            const data: I_Indicators_Pyload[] | null = await this.repositories.findNowAndPrevius(params.date, query.previous, body.auth.id);
            
            var now: I_Indicators_Pyload | undefined; 
            var previous: I_Indicators_Pyload | undefined;

            data?.forEach((i) => {
                if(i.date === params.date) {
                    now = i;
                }else {
                    previous = i;
                }
            });

            return {
                error: false,
                data: {
                    now,
                    previous
                }
            }
        }
        
        const data: I_Indicators_Pyload | null = await this.repositories.find(params.date, body.auth.id);
    
        return {
            error: false,
            data: { data }
        }
    }   

    async update(body: IBody, params: any, query: any): Promise<IServices> { 
        const exist: boolean = await this.repositories.exist(params.date, body.auth.id);

        this.log(body)

        if(!exist) {
            this.log("criando indicadores");

            const newData = {
                userId: body.auth.id,
                date: params.date,
                ...body.data
            }

            this.log(newData)

            const userId: number = await this.repositories.create(newData);

            this.log(userId);

            return {
                error: false,
                data: {
                    msg: "criado com sucesso",
                    id: userId
                }
            }
        }

        const id = await this.repositories.update(body.auth.id, params.data, body.data, parseInt(query.id));

        return {
            error: false,
            data: {
                msg: "salvo com sucesso",
                id
            }
        }
    }
}

export default IndicatorServices;
