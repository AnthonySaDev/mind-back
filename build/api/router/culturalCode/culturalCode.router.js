"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const culturalCode_controller_1 = __importDefault(require("@controller/culturalCode/culturalCode.controller"));
const UploadFIles_middleware_1 = __importDefault(require("@middleware/UploadFIles.middleware"));
class CulturalCodeRouter {
    main() {
        const router = (0, express_1.Router)();
        const culturalCodeController = new culturalCode_controller_1.default();
        router.post("/culturalCode", culturalCodeController.create);
        router.get("/culturalCode/:id", culturalCodeController.find);
        router.get("/culturalCode", culturalCodeController.findAll);
        router.patch("/culturalCode/:id", culturalCodeController.update);
        const uploadFIlesMiddleware = new UploadFIles_middleware_1.default();
        router.post("/culturalCode/upload", (req, res, next) => uploadFIlesMiddleware.main(req, res, next), (req, res) => res.send({ files: req.files }) // começar a receber a lista de arquivos pelo "body" 
        );
        return router;
    }
}
exports.default = CulturalCodeRouter;
//# sourceMappingURL=culturalCode.router.js.map