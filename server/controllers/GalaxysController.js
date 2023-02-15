import { galaxysService } from "../services/GalaxysService.js";
import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxysController extends BaseController{
  constructor(){
    super('api/galaxys')
    this.router
      .get('',this.getGalaxys)
      .post('',this.createGalaxy)
  }
  async getGalaxys(req, res, next) {
    try {
      let galaxys = await galaxysService.getGalaxys()
      return res.send(galaxys)
    } catch (error) {
      next(error)
    }
  }

  async createGalaxy(req,res, next){
    try {
      let galaxyData = req.body
      let galaxy = await galaxysService.createGalaxy(galaxyData)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async getPlanets(req,res,next){
    try {
      const galaxyId = req.params.galaxyId
      const planets = await planetsService.getPlanetsById(galaxyId)
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }
}