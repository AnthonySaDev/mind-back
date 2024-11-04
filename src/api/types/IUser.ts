export interface IUser_Create_Required {
    email: string;
    name: string;
    password: string;
}

export interface IUser {
    email: string;
    photo: string;
    name: string;
    blocked: boolean;
    password?: string;
    id?: number;
}

export interface IUser_Create_Return_Services {
    error: boolean;
    dataError?: any;
    messageError?: string;
    data?: any;
}