"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../../../model/shared/messages");
const db_1 = require("../../../db/db");
exports.apiDeleteTeam = (req, res, next) => {
    const teamID = req.params.id;
    db_1.db.none('delete from teams where id = ${id}', { id: teamID }).then(() => {
        res.json(messages_1.PublicInfo.infoDeleted());
    });
};
