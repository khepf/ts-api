"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../../../model/shared/messages");
const db_1 = require("../../../db/db");
exports.apiUpdateTeam = (req, res, next) => {
    const teamID = req.params.id;
    const data = req.body;
    const sql = db_1.pgp.helpers.update(data, undefined, 'teams') + ' where id = ${id}';
    db_1.db.none(sql, { id: teamID }).then(() => {
        res.json(messages_1.PublicInfo.infoUpdated({ updatedData: data }));
    });
};
