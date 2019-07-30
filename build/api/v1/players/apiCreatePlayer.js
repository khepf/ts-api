"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid/v4");
const messages_1 = require("../../../model/shared/messages");
const db_1 = require("../../../db/db");
exports.apiCreatePlayer = (req, res, next) => {
    const requiredFields = [
        'player_first_name',
        'player_last_name',
        'player_email',
        'player_phone',
        'is_team_owner'
    ];
    const givenFields = Object.getOwnPropertyNames(req.body);
    if (!requiredFields.every(field => givenFields.includes(field))) {
        return next(messages_1.APIError.errMissingBody());
    }
    const newPlayer = {
        id: uuid(),
        player_first_name: req.body.player_first_name || '',
        player_last_name: req.body.player_last_name || '',
        player_email: req.body.player_email || '',
        player_phone: req.body.player_phone || '',
        is_team_owner: req.body.is_team_owner
    };
    db_1.db.none(db_1.pgp.helpers.insert(newPlayer, undefined, 'players')).then(() => {
        res.json(messages_1.PublicInfo.infoCreated({ newPlayer: newPlayer }));
    });
};
