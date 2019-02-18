import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { PlanetListPageDto } from "../Dto/planet-list-page.dto";
import { catchError, map } from "rxjs/operators";
import { fromDtoToModelPlanet, fromDtoToModelPlanets, PlanetModel } from "../model/planet.model";
import { computeNumberOfApiPages } from "../utils/compute-number-of-api-pages";
import { computeApiPage } from "../utils/compute-api-page";
import { computeFirstApiResultIndex } from "../utils/compute-first-api-result-index";
import { PlanetListModel } from "../model/planet-list.model";
import { PlanetDto } from "../Dto/planet.dto";

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  planetsUrl: string = 'https://swapi.co/api/planets/';

  constructor(private http: HttpClient) {
  }

  fetchPlanetsPaginated(args: { query: string, page: number, pageSize: number }): Observable<PlanetListModel> {
    const {query, page, pageSize} = args;
    const apiPageSize = 10;
    const firstPage = computeApiPage({page, pageSize, apiPageSize});
    let listSize: number;
    let errorNumber = 0;
    const requests = Array.from(
      {length: computeNumberOfApiPages({page, pageSize, apiPageSize})},
      (_, i) => {
        const params = {
          page: (firstPage + i).toString(),
          search: query,
        };
        return this.http.get<PlanetListPageDto>(this.planetsUrl, {params}).pipe(
          map((dto: PlanetListPageDto) => {
            listSize = dto.count;
            return fromDtoToModelPlanets(dto.results)
          }),
          catchError((err) => {
            errorNumber++;
            return of(err)
          })
        )
      }
    );
    return forkJoin(requests).pipe(
      map((responses) => responses.reduce((flat, next) => flat.concat(next), [])),
      map((planets) => {
        const first = computeFirstApiResultIndex({page, pageSize, apiPageSize});
        const last = first + pageSize;
        return {listSize: listSize, planets: planets.splice(first, last), errorNumber: errorNumber}
      }),
    );
  }

  fetchPlanet(id: number): Observable<PlanetModel> {
    return this.http.get<PlanetDto>(this.planetsUrl + id.toString()).pipe(
      map((dto: PlanetDto) => fromDtoToModelPlanet(dto))
    );
  }
}
