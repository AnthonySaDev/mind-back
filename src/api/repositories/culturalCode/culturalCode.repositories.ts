
import { Prisma } from "@prisma/client";
import MainRepositories from "../main.repositories";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { ICultural } from "../../types/ICulturalCode";

class CulturalCodeRepositories extends MainRepositories {
    private pristamDB: Prisma.culturalCodeDelegate<DefaultArgs>;

    constructor() {
        super();
        this.pristamDB = this.prismaClient.culturalCode;
    }

    
    update(body: any, id: number, userId: number): Promise<Omit<ICultural, "files"> | null> {

        console.log(body.files)

        return this.pristamDB.update({
            where: { userId, id },
            data: {
                description: body.description,
                label: body.label,
                files: {
                    createMany: {
                        data: body.files ? body.files.map(({ path, filename, type, size }: any) => {
                            return { path, filename, type, size: size.toString() }
                        }) : {}
                    }
                }
            }
        });
    }

    findAll(userId: number): Promise<ICultural[] | null> {
        return this.pristamDB.findMany({
            where: { userId },
            include: { files: true },
            orderBy: { id: "desc" }
        });
    }

    find(id: number, userId: number): Promise<ICultural | null> {
        return this.pristamDB.findFirst({
            where: { id, userId },
            include: { files: true }
        });
    }

    create(label: string, userId: number): Promise<{ id: number }> {
        return this.pristamDB.create({
            data: {
                label,
                description: "",
                userId
            },
            select: {
                id: true
            }
        });
    }
}

export default CulturalCodeRepositories;
