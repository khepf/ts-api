"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bodyParser_1 = require("../general/bodyParser");
const apiCheckTeamFilters_1 = require("./apiCheckTeamFilters");
const apiGetTeams_1 = require("./apiGetTeams");
const apiCreateTeam_1 = require("./apiCreateTeam");
const apiDeleteTeam_1 = require("./apiDeleteTeam");
const apiUpdateTeam_1 = require("./apiUpdateTeam");
exports.teamsRouter = express_1.Router();
exports.teamsRouter.get('/', apiCheckTeamFilters_1.apiCheckTeamFilters, apiGetTeams_1.apiGetTeams);
exports.teamsRouter.post('/', bodyParser_1.jsonParser, apiCreateTeam_1.apiCreateTeam);
exports.teamsRouter.delete('/:id', apiDeleteTeam_1.apiDeleteTeam);
exports.teamsRouter.patch('/:id', bodyParser_1.jsonParser, apiUpdateTeam_1.apiUpdateTeam);