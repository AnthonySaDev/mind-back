import Dre_Repositories from "@repositories/dre/dre.repositories";
import moment from "moment-timezone";
import { IDre, IDre_payload } from "src/api/types/Dre.types";
import IBody from "src/api/types/IBody";
import { boolean } from "zod";


class Dre_Services {
    private value_dafault: IDre_payload;
    
    constructor() {
        this.value_dafault = {
            grossRevenue: 0,
            tax: 0,
            cost: 0,
            expenses: 0,
            reinvestments: 0,
            personalExpenses: 0
        }
    }


    async find_date(body: IBody, params: any): Promise<any> {
        const date = moment.tz(`${params.year}-${params.month}`, 'America/Sao_Paulo');

        const startMonth = date.startOf("month").toISOString();
        const endMonth = date.endOf("month").toISOString();

        const dre_repositories: Dre_Repositories = new Dre_Repositories();
        const response = await dre_repositories.find_date(startMonth, endMonth, body.auth.id);
        if(!response) return { message: "ainda não foi criado" };

        let accomplished: IDre = this.value_dafault;
        let budget: IDre = this.value_dafault;

        response.forEach((_data) => {
            switch(_data.mode) {
                case "accomplished":
                    accomplished = _data;
                    break;
                
                case "budget":
                    budget = _data;
                    break;
            }
        });
        
        return { 
            response: {
                accomplished,
                budget
            }
        };

    }


    async find(body: IBody): Promise<{ response?: any, message?: string }> {
        const dre_repositories: Dre_Repositories = new Dre_Repositories();
        const response = await dre_repositories.find(body.auth.id);

        
        return { 
            response
        };
    }

    async save(body: IBody, params: any): Promise<{ response?: any, message?: string }> {
        const { mode, year, month } = params;

        const date = moment.tz(`${year}-${month}`, 'America/Sao_Paulo');

        const startMonth = date.startOf("month").toISOString();
        const endMonth = date.endOf("month").toISOString();

        const dre_repositories: Dre_Repositories = new Dre_Repositories();
        const exist: boolean = await dre_repositories.exist(startMonth, endMonth, body.auth.id, mode);;

        if(exist) {
            const updatedDre = await dre_repositories.update(body.data, startMonth, mode, body.auth.id);
            return { response: updatedDre };
        }
        
        const newDre = await dre_repositories.create(body.data, startMonth, mode, body.auth.id);
        return { response: newDre };
    }
}

export default Dre_Services;
