import { RequestHandler } from 'express';
import { PublicInfo, APIError } from '../../../model/shared/messages';
import { db } from '../../../db/db';

export const apiDeleteTeam: RequestHandler = (req, res, next) => {
  const teamID = req.params.id;
  db.none('delete from teams where id = ${id}', { id: teamID }).then(() => {
    res.json(PublicInfo.infoDeleted());
  });
};
