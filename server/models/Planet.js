import { Schema } from "mongoose";
import { GalaxySchema } from "./Galaxy.js";
const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({
  name: {type: String, required: true, minLength: 3},
  biom: {type: String, required: true, default: ''},
  atmosphere: {type: Boolean},
  galaxyId: {type: ObjectId ,required:true, ref: 'Galaxy'}
}, {timestamps: true, toJSON: {virtuals: true}})



GalaxySchema.virtual('galaxy',{
  ref: 'Galaxy',
  justOne: true,
  localField:'galaxyId',
  foreignField: '_id'
})