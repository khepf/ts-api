"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tourSummary_1 = require("./tourSummary");
const reviews_1 = require("./reviews");
class TourDetail extends tourSummary_1.TourSummary {
    constructor(data, tourImages) {
        super(data);
        this.tourCategory = data.tour_category;
        this.tourDescription = data.tour_description || "";
        this.price = data.price;
        this.currency = data.currency;
        this.img = tourImages;
        this.reviews = data.reviews.map((item) => new reviews_1.Review(item));
    }
}
exports.TourDetail = TourDetail;
