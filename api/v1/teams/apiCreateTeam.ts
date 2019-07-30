import { RequestHandler } from 'express';
import uuid = require('uuid/v4');
import * as dbModel from '../../../db/model_generated';
import { PublicInfo, APIError } from '../../../model/shared/messages';
import { db, pgp } from '../../../db/db';

export const apiCreateTeam: RequestHandler = (req, res, next) => {
  const requiredFields = ['team_name', 'team_number'];
  const givenFields = Object.getOwnPropertyNames(req.body);
  if (!requiredFields.every(field => givenFields.includes(field))) {
    return next(APIError.errMissingBody());
  }
  const newTeam: dbModel.teams = {
    id: uuid(),
    team_name: req.body.team_name || '',
    team_number: req.body.team_number || '',
    team_description: req.body.team_description || ''
  };
  db.none(pgp.helpers.insert(newTeam, undefined, 'teams')).then(() => {
    res.json(PublicInfo.infoCreated({ newTeam: newTeam }));
  });
};
