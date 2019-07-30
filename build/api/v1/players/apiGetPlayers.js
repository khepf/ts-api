"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playerSummary_1 = require("../../../model/shared/playerSummary");
const playerFilters_1 = require("../../../model/shared/playerFilters");
const db_1 = require("../../../db/db");
exports.apiGetPlayers = (req, res, next) => {
    const filters = new playerFilters_1.PlayerFilters(req.query);
    db_1.db.any('select * from players where ${condition:raw}', {
        condition: filters.getCondition()
    }).then((players) => {
        res.json(players.map((item) => new playerSummary_1.PlayerSummary(item)));
    });
};
