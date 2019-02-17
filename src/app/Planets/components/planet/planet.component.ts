import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { SwapiService } from "../../services/swapi.service";
import { Observable } from "rxjs";
import { PlanetModel } from "../../model/planet.model";
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  planet$: Observable<PlanetModel>;

  constructor(private route: ActivatedRoute, private service: SwapiService) { }

  ngOnInit() {
    this.planet$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.fetchPlanet(+params.get('id'))
      )
    )
  }

}
