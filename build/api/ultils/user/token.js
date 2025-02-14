"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function generateToken(body) {
    return jsonwebtoken_1.default.sign(body, process.env.TOKEN_JWT, { expiresIn: "1d" });
}
exports.generateToken = generateToken;
//# sourceMappingURL=token.js.map