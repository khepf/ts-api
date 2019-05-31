"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tourSummary_1 = require("../../../model/shared/tourSummary");
const tourFilters_1 = require("../../../model/shared/tourFilters");
const db_1 = require("../../../db/db");
exports.apiGetTours = (req, res, next) => {
    const filters = new tourFilters_1.TourFilters(req.query);
    db_1.db.any("select * from tours where ${condition:raw}", { condition: filters.getCondition() }).then((tours) => {
        res.json(tours.map((item) => new tourSummary_1.TourSummary(item)));
    });
};
