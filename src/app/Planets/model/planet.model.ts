import { PlanetDto } from "../Dto/planet.dto";

export class PlanetModel {
  id: number = null;
  name: string = null;
  rotation_period: number = null;
  orbital_period: number = null;
  diameter: number = null;
  climate: string = null;
  gravity: string = null;
  terrain: string = null;
  surface_water: number = null;
  population: number = null;
}

export function fromDtoToModelPlanet (planetDto: PlanetDto): PlanetModel {
  return {
    id: +planetDto.url.match(/\d+/),
    name: planetDto.name,
    rotation_period: +planetDto.rotation_period,
    orbital_period: +planetDto.orbital_period,
    diameter: +planetDto.diameter,
    climate: planetDto.climate,
    gravity: planetDto.gravity,
    terrain: planetDto.terrain,
    surface_water: +planetDto.surface_water,
    population: +planetDto.population,
  }
}

export function fromDtoToModelPlanets(planetsDto: PlanetDto[]): PlanetModel[] {
  return planetsDto.map((planet) => fromDtoToModelPlanet(planet));
}
