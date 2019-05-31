import { RequestHandler } from "express";
import { APIError, PublicInfo } from "../../../model/shared/messages";
import { pgp, db } from "../../../db/db";
const caseConverter = require("change-case-object");

export const apiUpdateTour: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const data = caseConverter.snakeCase(req.body);
    const sql = pgp.helpers.update(data, undefined, "tours") + " where id = ${id}";
    db.none(sql, {id: tourID}).then(() => {
        res.json(PublicInfo.infoUpdated({updatedData: data}));
    });
};