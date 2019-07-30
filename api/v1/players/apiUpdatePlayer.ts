import { RequestHandler } from 'express';
import { APIError, PublicInfo } from '../../../model/shared/messages';
import { pgp, db } from '../../../db/db';

export const apiUpdatePlayer: RequestHandler = (req, res, next) => {
  const playerID = req.params.id;
  const data = req.body;
  const sql =
    pgp.helpers.update(data, undefined, 'players') + ' where id = ${id}';
  db.none(sql, { id: playerID }).then(() => {
    res.json(PublicInfo.infoUpdated({ updatedData: data }));
  });
};
