"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tourDetail_1 = require("../../../model/shared/tourDetail");
const static_1 = require("../general/static");
const messages_1 = require("../../../model/shared/messages");
const db_1 = require("../../../db/db");
exports.apiGetTourDetail = (req, res, next) => {
    const tourID = req.params.id;
    db_1.db.one("select t.*,\
            (select json_agg(reviews)\
                from reviews where tour_id = ${id}\
            ) as reviews\
            from tours as t\
            where t.id = ${id}", { id: tourID })
        .then((data) => {
        const imgNames = data.img || [];
        const imgURLs = imgNames.map(static_1.fileMapper(req.app.get("env")));
        res.json(new tourDetail_1.TourDetail(data, imgURLs));
    })
        .catch(err => {
        if (err instanceof db_1.pgp.errors.QueryResultError) {
            next(messages_1.APIError.errNotFound());
        }
        else {
            next(messages_1.APIError.errInvalidQueryParameter());
        }
    });
};
