"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../../../model/shared/messages");
const db_1 = require("../../../db/db");
exports.apiUpdatePlayer = (req, res, next) => {
    const playerID = req.params.id;
    const data = req.body;
    const sql = db_1.pgp.helpers.update(data, undefined, 'players') + ' where id = ${id}';
    db_1.db.none(sql, { id: playerID }).then(() => {
        res.json(messages_1.PublicInfo.infoUpdated({ updatedData: data }));
    });
};
