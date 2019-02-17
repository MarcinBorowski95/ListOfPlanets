import { Component } from '@angular/core';
import { PlanetModel } from "../../model/planet.model";
import { BehaviorSubject, combineLatest } from "rxjs";
import { debounceTime, map, switchMap } from "rxjs/operators";
import { SwapiService } from "../../services/swapi.service";
import { PlanetListModel } from "../../model/planet-list.model";

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent{
  filteredPlanets: PlanetModel[];
  collectionSize: number;
  private querySubject: BehaviorSubject<string>;
  private pageSubject: BehaviorSubject<number>;
  private pageSizeSubject: BehaviorSubject<number>;

  constructor(private service: SwapiService) {
    this.querySubject = new BehaviorSubject('');
    this.pageSubject = new BehaviorSubject(1);
    this.pageSizeSubject = new BehaviorSubject(5);
    combineLatest(
      this.querySubject,
      this.pageSubject,
      this.pageSizeSubject,
    ).pipe(
      map(([query, page, pageSize]) => ({query, page, pageSize})),
      debounceTime(500),
      switchMap((args) => this.service.fetchPlanetsPaginated(args))
    ).subscribe((results: PlanetListModel) => {
      this.filteredPlanets = results.planets;
      this.collectionSize = results.listSize;
    })
  }

  onQueryChange(val: string) {
    this.pageSubject.next(1);
    this.querySubject.next(val);
  }

  changePageSize(size: number) {
    this.pageSubject.next(1);
    this.pageSizeSubject.next(size);
  }

  onPageChange(page: number) {
    this.pageSubject.next(page);
  }
}
