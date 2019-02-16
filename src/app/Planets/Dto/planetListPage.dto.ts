import { PlanetDto } from "./planet.dto";

export interface PlanetListPageDto {
  count: number,
  next: string,
  previous: string,
  results: Array<PlanetDto>
}
