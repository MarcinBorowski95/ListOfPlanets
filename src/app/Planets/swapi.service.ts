import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { PlanetListPageDto } from "./Dto/planet-list-page.dto";
import { catchError, map, tap } from "rxjs/operators";
import { fromDtoToModelPlanets, PlanetModel } from "./model/planet.model";
import { computeNumberOfApiPages } from "./utils/computeNumberOfApiPages";
import { computeApiPage } from "./utils/computeApiPage";
import { computeFirstApiResultIndex } from "./utils/computeFirstApiResultIndex";
import { PlanetListModel } from "./model/planet-list.model";
import { isNull } from "util";
import has = Reflect.has;

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  planetsUrl: string = 'https://swapi.co/api/planets/';

  constructor(private http: HttpClient) {
  }

  fetchPlanetList(): Observable<PlanetModel[]> {
    let responses = [];
    for (let i = 1; i <= 7; i++) {
      const params = new HttpParams().set('page', i.toString());
      responses.push(this.http.get<PlanetListPageDto>(this.planetsUrl, {params: params}).pipe(
        map((dto: PlanetListPageDto) => fromDtoToModelPlanets(dto.results))
      ));
    }
    return forkJoin(responses);
  }

  fetchPlanetsPaginated(args: { query: string, page: number, pageSize: number }): Observable<PlanetListModel> {
    const {query, page, pageSize} = args;
    const apiPageSize = 10;
    const firstPage = computeApiPage({page, pageSize, apiPageSize});
    let listSize: number;
    const requests = Array.from(
      {length: computeNumberOfApiPages({page, pageSize, apiPageSize})},
      (_, i) => {
        const params = {
          page: (firstPage + i).toString(),
          search: query,
        };
        return this.http.get<PlanetListPageDto>(this.planetsUrl, {params}).pipe(
          map((dto: PlanetListPageDto) => {
            console.log(dto);
            listSize = dto.count;
            return fromDtoToModelPlanets(dto.results)
          }),
        )
      }
    );
    return forkJoin(requests).pipe(
      map((responses) => responses.reduce((flat, next) => flat.concat(next), [])),
      map((planets) => {
        const first = computeFirstApiResultIndex({page, pageSize, apiPageSize});
        const last = first + pageSize;
        return {listSize: listSize, planets: planets.splice(first, last)}
      }),
    );
  }
}
