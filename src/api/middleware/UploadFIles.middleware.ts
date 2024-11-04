import Busboy from "busboy";
import { createWriteStream } from "fs";
import { join } from "path";
import { NextFunction, Request, Response } from "express";
import sharp from "sharp";
import {baseurl} from "../configs/file";
import { formatTextToFileName } from "../ultils/formatText";



class UploadFIlesMiddleware {
    main(req: any, res: Response, next: NextFunction, onProgress?: (size: number, filename: string) => void) {
        const busboy =  Busboy({ headers: req.headers });
        const files: Array<{ filename: string, path: string, type: string, size: number }> = [];

        busboy.on("file", (name, file, info) => {
            const filename = info.filename.replace(/\s+/g, '-');
            let size: number = 0;

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

 
            if(info.mimeType.indexOf("image") !== -1) {
                file.pipe(
                    sharp().resize(600, 600)
                ).pipe(createWriteStream(join(baseurl, `preview-600x600-${filename}`)))

                file.pipe(
                    sharp().resize(70, 70)
                ).pipe(createWriteStream(join(baseurl, `preview-70x70-${filename}`)))
            }

            file.pipe(createWriteStream(join(baseurl, filename)));
        });

        busboy.on("finish", () => {
            req.files = files as any;
            next();
        });

        req.pipe(busboy);
    }
}

export default UploadFIlesMiddleware;
