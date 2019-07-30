"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid/v4");
const messages_1 = require("../../../model/shared/messages");
const db_1 = require("../../../db/db");
exports.apiCreateTeam = (req, res, next) => {
    const requiredFields = ['team_name', 'team_number'];
    const givenFields = Object.getOwnPropertyNames(req.body);
    if (!requiredFields.every(field => givenFields.includes(field))) {
        return next(messages_1.APIError.errMissingBody());
    }
    const newTeam = {
        id: uuid(),
        team_name: req.body.team_name || '',
        team_number: req.body.team_number || '',
        team_description: req.body.team_description || ''
    };
    db_1.db.none(db_1.pgp.helpers.insert(newTeam, undefined, 'teams')).then(() => {
        res.json(messages_1.PublicInfo.infoCreated({ newTeam: newTeam }));
    });
};
