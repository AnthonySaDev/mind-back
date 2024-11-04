"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthMiddleware {
    main(req, res, next) {
        const token = req.headers["x-access-token"];
        if (!token) {
            res.status(401).send({
                error: true,
                messageError: "token is required"
            });
        }
        const infosToken = (0, jsonwebtoken_1.decode)(token);
        setTimeout(() => {
            const newBody = {
                auth: infosToken,
                data: req.body
            };
            req.body = newBody;
            next();
        }, infosToken.waitTime ? infosToken.waitTime : 0);
    }
}
exports.default = AuthMiddleware;
//# sourceMappingURL=Auth.middleware.js.map