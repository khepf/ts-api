"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const teamSummary_1 = require("../../../model/shared/teamSummary");
const teamFilters_1 = require("../../../model/shared/teamFilters");
const db_1 = require("../../../db/db");
exports.apiGetTeams = (req, res, next) => {
    const filters = new teamFilters_1.TeamFilters(req.query);
    db_1.db.any('select * from teams where ${condition:raw}', {
        condition: filters.getCondition()
    }).then((teams) => {
        res.json(teams.map((item) => new teamSummary_1.TeamSummary(item)));
    });
};
