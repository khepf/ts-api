"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const static_1 = require("../general/static");
const messages_1 = require("../../../model/shared/messages");
const db_1 = require("../../../db/db");
exports.apiUploadImage = (req, res, next) => {
    const tourID = req.params.id;
    const upload = static_1.getFileUploader(req.app.get("env"));
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
            next(messages_1.APIError.errServerError());
        }
        else {
            const sql = "update tours\
                        set img = array_append(img, ${file})\
                        where id = ${id}";
            db_1.db.none(sql, { file: req.file.filename, id: tourID })
                .then(() => {
                res.json(messages_1.PublicInfo.infoCreated({ uploadedFile: req.file.filename }));
            });
        }
    });
};
