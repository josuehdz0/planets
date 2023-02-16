
import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class PlanetsService{
  async createPlanets(planetsData) {
    const galaxy = await dbContext.Galaxys.findById(planetsData.galaxyId)
    if(!galaxy){
      throw new BadRequest('bad galaxy Id'+ planetsData.galaxyId)
    }

    const planet = await dbContext.Planets.create(planetsData)
    return planet
  }
  async getPlanetsById(galaxyId) {
    const planets = await dbContext.Planets.find({ galaxyId }).populate('galaxy','name')
    return planets
  }
}
export const planetsService = new PlanetsService()