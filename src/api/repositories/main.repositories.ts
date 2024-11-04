import { PrismaClient } from "@prisma/client";


class MainRepositories {
    public prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = new PrismaClient()
    }
}


export default MainRepositories;
