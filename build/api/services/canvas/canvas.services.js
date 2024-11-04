"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const main_services_1 = __importDefault(require("../main.services"));
const canvas_repositories_1 = __importDefault(require("../../repositories/canvas/canvas.repositories"));
class CanvasServices extends main_services_1.default {
    constructor() {
        super();
        this.canvasR = new canvas_repositories_1.default();
    }
    async update(body, params, token) {
        // check id
        const id = parseInt(params.id);
        if (isNaN(id))
            return {
                error: true,
                messageError: "id is NaN"
            };
        // token exist
        if (!token)
            return {
                error: true,
                messageError: "token is required"
            };
        // decode token 
        const infosOfToken = (0, jsonwebtoken_1.decode)(token);
        const canvas = await this.canvasR.update(body, id, infosOfToken.id);
        return {
            error: false,
            data: canvas
        };
    }
    async find(params, token) {
        // check id
        const id = parseInt(params.id);
        if (isNaN(id))
            return {
                error: true,
                messageError: "id is NaN"
            };
        // token exist
        if (!token)
            return {
                error: true,
                messageError: "token is required"
            };
        // decode token 
        const infosOfToken = (0, jsonwebtoken_1.decode)(token);
        const canvas = await this.canvasR.find(id, infosOfToken.id);
        return {
            error: false,
            data: canvas
        };
    }
    async list(token) {
        // token exist
        if (!token)
            return {
                error: true,
                messageError: "token is required"
            };
        // decode token 
        const infosOfToken = (0, jsonwebtoken_1.decode)(token);
        const canvas = await this.canvasR.list(infosOfToken.id);
        return {
            error: false,
            data: {
                list: canvas
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
        // create canvas
        const canvas = await this.canvasR.create(body.label, infosOfToken.id);
        return {
            error: false,
            data: {
                menssage: "canvas created with success",
                idOfCanvas: canvas
            }
        };
    }
}
exports.default = CanvasServices;
//# sourceMappingURL=canvas.services.js.map