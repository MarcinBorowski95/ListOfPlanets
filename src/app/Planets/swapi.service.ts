import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { PlanetListPageDto } from "./Dto/planetListPage.dto";
import { promise } from "selenium-webdriver";
import { map } from "rxjs/operators";
import { fromDtoToModelPlanets, PlanetModel } from "./model/planet.model";

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  planetsUrl: string = 'https://swapi.co/api/planets/';

  constructor(private http: HttpClient) { }

  fetchPlanetListPage(page: string): Observable<PlanetModel[]> {
    const params = new HttpParams().set('page', page);
    return this.http.get<PlanetListPageDto>(this.planetsUrl, {params: params}).pipe(
      map((dto: PlanetListPageDto) => fromDtoToModelPlanets(dto.results))
    )
  }
}
