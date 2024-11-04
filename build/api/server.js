"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const file_1 = require("@configs/file");
const calendar_router_1 = __importDefault(require("@router/calendar/calendar.router"));
const account_router_1 = __importDefault(require("@router/account/account.router"));
const canvas_router_1 = __importDefault(require("@router/canvas/canvas.router"));
const cronograma_router_1 = __importDefault(require("@router/cronograma/cronograma.router"));
const culturalCode_router_1 = __importDefault(require("@router/culturalCode/culturalCode.router"));
const dev_router_1 = __importDefault(require("@router/dev/dev.router"));
const indicators_router_1 = __importDefault(require("@router/indicators/indicators.router"));
const kanban_router_1 = __importDefault(require("@router/kanban/kanban.router"));
const upload_router_1 = __importDefault(require("@router/upload/upload.router"));
const app = (0, express_1.default)();
// config express
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use("/files", express_1.default.static(file_1.baseurl));
app.use(new account_router_1.default().main());
app.use(new canvas_router_1.default().main());
app.use(new dev_router_1.default().main());
app.use(new culturalCode_router_1.default().main());
app.use(new indicators_router_1.default().main());
app.use(new calendar_router_1.default().main());
app.use(new upload_router_1.default().main());
app.use(new upload_router_1.default().main());
app.use(new cronograma_router_1.default().main());
app.use(new kanban_router_1.default().main());
app.listen(process.env.PORT, () => console.log(`Server stated\nhttp://localhost:${process.env.PORT}`));
//# sourceMappingURL=server.js.map