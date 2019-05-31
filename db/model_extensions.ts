import * as dbModel from "../db/model_generated";

export interface toursWithReviews extends dbModel.tours {
    reviews: dbModel.reviews[]
}