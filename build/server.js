"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const errorHandling_1 = require("./api/v1/general/errorHandling");
const apiDownloadImage_1 = require("./api/v1/tours/apiDownloadImage");
const apiUsers_1 = require("./api/v1/users/apiUsers");
const apiTours_1 = require("./api/v1/tours/apiTours");
const apiTeams_1 = require("./api/v1/teams/apiTeams");
const apiPlayers_1 = require("./api/v1/players/apiPlayers");
const cors_1 = require("./api/v1/general/cors");
const logging_1 = require("./api/v1/general/logging");
const validation_1 = require("./api/v1/general/validation");
const app = express_1.default();
app.use(logging_1.logger);
app.use(cors_1.apiCors);
app.use(validation_1.apiValidation);
app.use('/static', express_1.default.static(path_1.default.resolve('./', 'public', 'img')));
app.get('/headers', (req, res, next) => {
    res.json(req.headers);
});
app.get('/', (req, res, next) => {
    res.send('Tour booking API');
});
app.use('/users', apiUsers_1.userRouter);
app.use('/tours', apiTours_1.toursRouter);
app.use('/teams', apiTeams_1.teamsRouter);
app.use('/players', apiPlayers_1.playersRouter);
app.get('/static/download/:id', apiDownloadImage_1.apiDownloadImage);
app.use(errorHandling_1.apiErrorHandler);
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
