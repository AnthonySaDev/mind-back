"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const busboy_1 = __importDefault(require("busboy"));
const fs_1 = require("fs");
const path_1 = require("path");
const sharp_1 = __importDefault(require("sharp"));
const file_1 = require("../configs/file");
class UploadFIlesMiddleware {
    main(req, res, next, onProgress) {
        const busboy = (0, busboy_1.default)({ headers: req.headers });
        const files = [];
        busboy.on("file", (name, file, info) => {
            const filename = info.filename.replace(/\s+/g, '-');
            let size = 0;
            file.on('data', (data) => {
                size += data.length;
                onProgress ? onProgress(size, filename) : undefined;
            });
            file.on("end", () => {
                files.push({
                    path: `/files/${filename}`,
                    filename,
                    type: info.mimeType,
                    size
                });
            });
            if (info.mimeType.indexOf("image") !== -1) {
                file.pipe((0, sharp_1.default)().resize(600, 600)).pipe((0, fs_1.createWriteStream)((0, path_1.join)(file_1.baseurl, `preview-600x600-${filename}`)));
                file.pipe((0, sharp_1.default)().resize(70, 70)).pipe((0, fs_1.createWriteStream)((0, path_1.join)(file_1.baseurl, `preview-70x70-${filename}`)));
            }
            file.pipe((0, fs_1.createWriteStream)((0, path_1.join)(file_1.baseurl, filename)));
        });
        busboy.on("finish", () => {
            req.files = files;
            next();
        });
        req.pipe(busboy);
    }
}
exports.default = UploadFIlesMiddleware;
//# sourceMappingURL=UploadFIles.middleware.js.map