import { Injectable } from '@angular/core';
import { forkJoin, Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { PlanetListPageDto } from "./Dto/planet-list-page.dto";
import { map } from "rxjs/operators";
import { fromDtoToModelPlanets, PlanetModel } from "./model/planet.model";

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  planetsUrl: string = 'https://swapi.co/api/planets/';

  constructor(private http: HttpClient) { }

  fetchPlanetListPage(): Observable<PlanetModel[]> {
    let responses = [];
    for (let i = 1; i <= 7; i++) {
      const params = new HttpParams().set('page', i.toString());
      responses.push(this.http.get<PlanetListPageDto>(this.planetsUrl, {params: params}).pipe(
        map((dto: PlanetListPageDto) => fromDtoToModelPlanets(dto.results))
      ));
    }
    return forkJoin(responses);
  }
}
