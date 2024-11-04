import { IUser } from "./IUser";

export interface IDre {
    id?: number;

    grossRevenue: number, // Receita bruta
    tax: number, // Imposto
    cost: number, // Custo
    expenses: number, // Dispesas
    reinvestments: number, // Reivestimentos
    personalExpenses: number, // Despesas Pessoais

    mode?: string;

    userId?: number;
    user?: IUser;

    createdAt?: Date;
    updatedAt?: Date;
}

export type IDre_payload = Omit<IDre, "id" | "userId" | "user">