import { Interface } from "readline";

export interface IFiles {
    size: number;
    filename: string;
    path: string;
    type: string;
}

export type ICalendar_res = {
    id: number;
    
    text: string;
    date: string;
    hours: string;
    status: string;
    responsible: string;
    label: string;
    
    cronogramaId: number;

    updatedAt: Date;
    createdAt: Date;
};

export type ICalendar_Required = {
    month: string;
    year: string;
    id: string;
    cache?: boolean; 
}


export type ICalendar_Payload = {
    text: string;
    date: string;
    hours: string;
    status: string;
    responsible: string;
    label: string;
    everyDay: boolean;

    cronogramaId: number;

    files: IFiles[];
}