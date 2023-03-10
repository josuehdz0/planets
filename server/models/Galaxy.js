import { Schema } from "mongoose";

export const GalaxySchema = new Schema({
  name: {type: String, required: true, minLength: 3},
  stars: {type: Number, required: true, min:1}
}, {timestamps: true, toJSON: { virtuals: true} })