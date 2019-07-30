import { RequestHandler } from 'express';
import uuid = require('uuid/v4');
import * as dbModel from '../../../db/model_generated';
import { PublicInfo, APIError } from '../../../model/shared/messages';
import { db, pgp } from '../../../db/db';

export const apiCreatePlayer: RequestHandler = (req, res, next) => {
  const requiredFields = [
    'player_first_name',
    'player_last_name',
    'player_email',
    'player_phone',
    'is_team_owner'
  ];
  const givenFields = Object.getOwnPropertyNames(req.body);
  if (!requiredFields.every(field => givenFields.includes(field))) {
    return next(APIError.errMissingBody());
  }
  const newPlayer: dbModel.players = {
    id: uuid(),
    player_first_name: req.body.player_first_name || '',
    player_last_name: req.body.player_last_name || '',
    player_email: req.body.player_email || '',
    player_phone: req.body.player_phone || '',
    is_team_owner: req.body.is_team_owner
  };
  db.none(pgp.helpers.insert(newPlayer, undefined, 'players')).then(() => {
    res.json(PublicInfo.infoCreated({ newPlayer: newPlayer }));
  });
};
