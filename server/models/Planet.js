import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({
  name: {type: String, required: true, minLength: 3},
  biom: {type: String, default: ''},
  atmosphere: {type: Boolean},
  galaxyId: {type: ObjectId ,required:true, ref: 'Galaxy'}
},  { timestamps: true, toJSON: { virtuals: true } })



PlanetSchema.virtual('galaxy', {
  ref: 'Galaxy',
  justOne: true,
  localField:'galaxyId',
  foreignField: '_id'
})