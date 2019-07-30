import { RequestHandler } from 'express';
import { APIError, PublicInfo } from '../../../model/shared/messages';
import { pgp, db } from '../../../db/db';

export const apiUpdateTeam: RequestHandler = (req, res, next) => {
  const teamID = req.params.id;
  const data = req.body;
  const sql =
    pgp.helpers.update(data, undefined, 'teams') + ' where id = ${id}';
  db.none(sql, { id: teamID }).then(() => {
    res.json(PublicInfo.infoUpdated({ updatedData: data }));
  });
};
