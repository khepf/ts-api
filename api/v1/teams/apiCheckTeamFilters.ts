import { RequestHandler } from 'express';
import { TeamFilters } from '../../../model/shared/teamFilters';
import { APIError } from '../../../model/shared/messages';

export const apiCheckTeamFilters: RequestHandler = (req, res, next) => {
  const filters = new TeamFilters(req.query);
  for (let filter of Object.getOwnPropertyNames(req.query)) {
    if (!filters.hasOwnProperty(filter)) {
      next(new APIError('Query String Error', 'No such filter.', 400));
    }
  }
  next();
};
