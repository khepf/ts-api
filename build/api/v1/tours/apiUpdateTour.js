"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../../data/data");
const messages_1 = require("../../../model/shared/messages");
exports.apiUpdateTour = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = data_1.DataStore.tours.findIndex((item) => item.id == tourID);
    if (tourIndex > -1) {
        const originalTour = data_1.DataStore.tours[tourIndex];
        const newTour = {
            id: tourID,
            location: req.body.location || originalTour.location,
            tourTitle: req.body.tourTitle || originalTour.tourTitle,
            tourCategory: req.body.tourCategory || originalTour.tourCategory,
            tourDescription: req.body.tourDescription || originalTour.tourDescription,
            price: req.body.price || originalTour.price,
            currency: req.body.currency || originalTour.currency,
            img: originalTour.img
        };
        data_1.DataStore.tours[tourIndex] = newTour;
        res.json(messages_1.PublicInfo.infoUpdated({ updatedTour: newTour }));
    }
    else {
        next(messages_1.APIError.errNotFound());
    }
};
