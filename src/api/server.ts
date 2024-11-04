import dotenv from "dotenv/config";
import cors from "cors";

import express, { Express } from "express";

import { baseurl } from "@configs/file";

import Calendar_Router from "@router/calendar/calendar.router";
import AccountRouter from "@router/account/account.router";
import CanvasRouter from "@router/canvas/canvas.router";
import Cronograma_Router from "@router/cronograma/cronograma.router";
import CulturalCodeRouter from "@router/culturalCode/culturalCode.router";
import DevRouter from "@router/dev/dev.router";
import IndicatorsRouter from "@router/indicators/indicators.router";
import Kanban_Router from "@router/kanban/kanban.router";
import Upload_Router from "@router/upload/upload.router";
import Dre_Router from "@router/dre/dre.router";
import Useful_router from "@router/useful/useful.router";

const app: Express = express();

// config express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/files", express.static(baseurl));

app.use(new AccountRouter().main());
app.use(new CanvasRouter().main());
app.use(new DevRouter().main());
app.use(new CulturalCodeRouter().main());
app.use(new IndicatorsRouter().main());
app.use(new Calendar_Router().main());
app.use(new Upload_Router().main());
app.use(new Upload_Router().main());
app.use(new Cronograma_Router().main());
app.use(new Kanban_Router().main());
app.use(new Dre_Router().main());
app.use(new Useful_router().main());




app.listen(process.env.PORT, () => console.log(`Server stated\nhttp://localhost:${process.env.PORT}`));

