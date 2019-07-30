"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../../../model/shared/messages");
const db_1 = require("../../../db/db");
exports.apiDeletePlayer = (req, res, next) => {
    const playerID = req.params.id;
    db_1.db.none('delete from players where id = ${id}', { id: playerID }).then(() => {
        res.json(messages_1.PublicInfo.infoDeleted());
    });
};
