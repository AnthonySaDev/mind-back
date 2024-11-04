export interface IServices {
    error: boolean;
    dataError?: any;
    messageError?: string;
    data?: any;
}

export default interface IResponseServices {
    data?: any;
    msg?: string;
    cache?: boolean;
    error?: boolean;
}
