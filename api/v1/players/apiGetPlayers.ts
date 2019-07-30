import { RequestHandler } from 'express';
import { PlayerSummary } from '../../../model/shared/playerSummary';
import { PlayerFilters } from '../../../model/shared/playerFilters';
import { db } from '../../../db/db';
import * as dbModel from '../../../db/model_generated';

export const apiGetPlayers: RequestHandler = (req, res, next) => {
  const filters = new PlayerFilters(req.query);
  db.any('select * from players where ${condition:raw}', {
    condition: filters.getCondition()
  }).then((players: dbModel.players[]) => {
    res.json(players.map((item: any) => new PlayerSummary(item)));
  });
};
