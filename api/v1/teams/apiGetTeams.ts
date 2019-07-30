import { RequestHandler } from 'express';
import { TeamSummary } from '../../../model/shared/teamSummary';
import { TeamFilters } from '../../../model/shared/teamFilters';
import { db } from '../../../db/db';
import * as dbModel from '../../../db/model_generated';

export const apiGetTeams: RequestHandler = (req, res, next) => {
  const filters = new TeamFilters(req.query);
  db.any('select * from teams where ${condition:raw}', {
    condition: filters.getCondition()
  }).then((teams: dbModel.teams[]) => {
    res.json(teams.map((item: any) => new TeamSummary(item)));
  });
};
