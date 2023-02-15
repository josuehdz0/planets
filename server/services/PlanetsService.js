import { dbContext } from "../db/DbContext.js"

class PlanetsService{
  async getPlanetsById(galaxyId) {
    const planets = await dbContext.Planets
    .find({ galaxyId})
    .populate('galaxy', 'name')
    return planets
  }
}
export const planetsService = new PlanetsService()