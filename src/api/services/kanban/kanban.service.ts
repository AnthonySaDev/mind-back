


import Kanban_Repositories from "../../repositories/kanban/kanban.repositories";
import IBody from "../../types/IBody";


class Kanban_Services {
    async list(body: IBody): Promise<any> {
        const cronograma_Repositories: Kanban_Repositories = new Kanban_Repositories();
        const res = await cronograma_Repositories.list(body.auth.id);
        
        return res;
    }
}

export default Kanban_Services;