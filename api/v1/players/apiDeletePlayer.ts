import { RequestHandler } from 'express';
import { PublicInfo, APIError } from '../../../model/shared/messages';
import { db } from '../../../db/db';

export const apiDeletePlayer: RequestHandler = (req, res, next) => {
  const playerID = req.params.id;
  db.none('delete from players where id = ${id}', { id: playerID }).then(() => {
    res.json(PublicInfo.infoDeleted());
  });
};
