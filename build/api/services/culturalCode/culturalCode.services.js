"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const culturalCode_repositories_1 = __importDefault(require("../../repositories/culturalCode/culturalCode.repositories"));
const main_services_1 = __importDefault(require("../main.services"));
class CulturalCodeServices extends main_services_1.default {
    constructor() {
        super();
        this.culturalCodeR = new culturalCode_repositories_1.default();
    }
    async update(body, params, token) {
        // token exist
        if (!token)
            return {
                error: true,
                messageError: "token is required"
            };
        // decode token 
        const infosOfToken = (0, jsonwebtoken_1.decode)(token);
        // check id
        const id = parseInt(params.id);
        if (isNaN(id))
            return {
                error: true,
                messageError: "id is NaN"
            };
        // console.log(body)
        const culturalCode = await this.culturalCodeR.update(body, id, infosOfToken.id);
        return {
            error: false,
            data: {
                data: culturalCode
            }
        };
    }
    async findAll(token) {
        // token exist
        if (!token)
            return {
                error: true,
                messageError: "token is required"
            };
        // decode token 
        const infosOfToken = (0, jsonwebtoken_1.decode)(token);
        const culturalCode = await this.culturalCodeR.findAll(infosOfToken.id);
        return {
            error: false,
            data: {
                data: culturalCode
            }
        };
    }
    async find(params, token) {
        // token exist
        if (!token)
            return {
                error: true,
                messageError: "token is required"
            };
        // decode token 
        const infosOfToken = (0, jsonwebtoken_1.decode)(token);
        // check id
        const id = parseInt(params.id);
        if (isNaN(id))
            return {
                error: true,
                messageError: "id is NaN"
            };
        const culturalCode = await this.culturalCodeR.find(id, infosOfToken.id);
        return {
            error: false,
            data: {
                data: culturalCode
            }
        };
    }
    async create(body, token) {
        // token exist
        if (!token)
            return {
                error: true,
                messageError: "token is required"
            };
        // decode token 
        const infosOfToken = (0, jsonwebtoken_1.decode)(token);
        // label exist
        if (!body.label)
            return {
                error: true,
                messageError: "label is required for create canvas"
            };
        const { id } = await this.culturalCodeR.create(body.label, infosOfToken.id);
        return {
            error: false,
            data: {
                menssage: "canvas created with success",
                idOfCanvas: id
            }
        };
    }
}
exports.default = CulturalCodeServices;
//# sourceMappingURL=culturalCode.services.js.map