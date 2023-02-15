import { dbContext } from "../db/DbContext.js"

class PlanetsService{
  async getPlanetsById(galaxyId) {
    const planet = await dbContext.Planets
    .find({ galaxyId})
    .populate('galaxy', 'name')
  }
}
export const planetsService = new PlanetsService()