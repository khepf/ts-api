"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const teamFilters_1 = require("../../../model/shared/teamFilters");
const messages_1 = require("../../../model/shared/messages");
exports.apiCheckTeamFilters = (req, res, next) => {
    const filters = new teamFilters_1.TeamFilters(req.query);
    for (let filter of Object.getOwnPropertyNames(req.query)) {
        if (!filters.hasOwnProperty(filter)) {
            next(new messages_1.APIError('Query String Error', 'No such filter.', 400));
        }
    }
    next();
};
