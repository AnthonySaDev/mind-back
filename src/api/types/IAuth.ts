export default interface IAuth {
    id: number;
    email: string;
    photo: string;
    name: string;
    blocked: boolean;
    iat: number;
    exp: number;
}