import { RequestHandler } from "express";
import {TourSummary} from "../../../model/shared/tourSummary";
import { TourFilters } from "../../../model/shared/tourFilters";
import { db } from "../../../db/db";
import * as dbModel from "../../../db/model_generated";

export const apiGetTours: RequestHandler = (req, res, next) => {
    const filters = new TourFilters(req.query);
    db.any("select * from tours where ${condition:raw}", {condition: filters.getCondition()}).then((tours: dbModel.tours[]) => {
        res.json(tours.map((item: any) => new TourSummary(item)));
    });
};