import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetsController extends BaseController{
  constructor(){
    super('api/planets')
    this.router
      .post('',this.createPlanets)
  }
  async createPlanets(req, res, next) {
    try {
      const planetsData = req.body
      const planet = await planetsService.createPlanets(planetsData)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }
}