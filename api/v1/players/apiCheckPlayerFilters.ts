import { RequestHandler } from 'express';
import { PlayerFilters } from '../../../model/shared/playerFilters';
import { APIError } from '../../../model/shared/messages';

export const apiCheckPlayerFilters: RequestHandler = (req, res, next) => {
  const filters = new PlayerFilters(req.query);
  for (let filter of Object.getOwnPropertyNames(req.query)) {
    if (!filters.hasOwnProperty(filter)) {
      next(new APIError('Query String Error', 'No such filter.', 400));
    }
  }
  next();
};
