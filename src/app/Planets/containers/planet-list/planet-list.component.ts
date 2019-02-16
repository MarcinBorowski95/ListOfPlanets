import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlanetModel } from "../../model/planet.model";
import { Observable } from "rxjs";
import { SwapiService } from "../../swapi.service";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {
  planetList$: Observable<PlanetModel[]>;

  constructor(private service: SwapiService) {
  }

  ngOnInit() {
    this.planetList$ = this.service.fetchPlanetListPage().pipe(
      map((planets) => planets.reduce((flat, next) => flat.concat(next), [])),
    );
  }

}
