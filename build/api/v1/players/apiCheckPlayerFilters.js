"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playerFilters_1 = require("../../../model/shared/playerFilters");
const messages_1 = require("../../../model/shared/messages");
exports.apiCheckPlayerFilters = (req, res, next) => {
    const filters = new playerFilters_1.PlayerFilters(req.query);
    for (let filter of Object.getOwnPropertyNames(req.query)) {
        if (!filters.hasOwnProperty(filter)) {
            next(new messages_1.APIError('Query String Error', 'No such filter.', 400));
        }
    }
    next();
};
