"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UploadFIles_middleware_1 = __importDefault(require("@middleware/UploadFIles.middleware"));
class Upload_Router {
    main() {
        const router = (0, express_1.Router)();
        const uploadFIlesMiddleware = new UploadFIles_middleware_1.default();
        router.post("/files/upload", (req, res, next) => uploadFIlesMiddleware.main(req, res, next), (req, res) => res.send({ files: req.files }) // começar a receber a lista de arquivos pelo "body" 
        );
        return router;
    }
}
exports.default = Upload_Router;
//# sourceMappingURL=upload.router.js.map