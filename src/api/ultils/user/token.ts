import jwt from "jsonwebtoken";

import { IUser } from "../../types/IUser"

export function generateToken(body: IUser): string {
    return jwt.sign(
        body,
        process.env.TOKEN_JWT!,
        {expiresIn: "1d"}
    );
}