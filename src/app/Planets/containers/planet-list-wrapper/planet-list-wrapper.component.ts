import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlanetModel } from "../../model/planet.model";
import { Observable } from "rxjs";
import { SwapiService } from "../../swapi.service";
import { map, tap } from "rxjs/operators";

@Component({
  selector: 'app-planet-list-wrapper',
  templateUrl: './planet-list-wrapper.component.html',
  styleUrls: ['./planet-list-wrapper.component.scss']
})
export class PlanetListWrapperComponent implements OnInit {
  planetList$: Observable<PlanetModel[]>;

  constructor(private service: SwapiService) {
  }

  ngOnInit() {
    this.planetList$ = this.service.fetchPlanetListPage().pipe(
      map((planets) => planets.reduce((flat, next) => flat.concat(next), [])),
    );
  }

}
