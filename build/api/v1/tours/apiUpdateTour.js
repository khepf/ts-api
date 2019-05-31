"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../../../model/shared/messages");
const db_1 = require("../../../db/db");
const caseConverter = require("change-case-object");
exports.apiUpdateTour = (req, res, next) => {
    const tourID = req.params.id;
    const data = caseConverter.snakeCase(req.body);
    const sql = db_1.pgp.helpers.update(data, undefined, "tours") + " where id = ${id}";
    db_1.db.none(sql, { id: tourID }).then(() => {
        res.json(messages_1.PublicInfo.infoUpdated({ updatedData: data }));
    });
};
