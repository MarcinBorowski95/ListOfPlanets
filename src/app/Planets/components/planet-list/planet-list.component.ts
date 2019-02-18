import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlanetModel } from "../../model/planet.model";
import { BehaviorSubject, combineLatest } from "rxjs";
import { debounceTime, map, switchMap, takeWhile, tap } from "rxjs/operators";
import { SwapiService } from "../../services/swapi.service";
import { PlanetListModel } from "../../model/planet-list.model";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit, OnDestroy{
  filteredPlanets: PlanetModel[];
  collectionSize: number;
  private querySubject: BehaviorSubject<string>;
  private pageSubject: BehaviorSubject<number>;
  private pageSizeSubject: BehaviorSubject<number>;
  private alive = true;

  constructor(private service: SwapiService, private spinner: NgxSpinnerService) {
    this.querySubject = new BehaviorSubject('');
    this.pageSubject = new BehaviorSubject(1);
    this.pageSizeSubject = new BehaviorSubject(5);
    combineLatest(
      this.querySubject,
      this.pageSubject,
      this.pageSizeSubject,
    ).pipe(
      map(([query, page, pageSize]) => ({query, page, pageSize})),
      debounceTime(300),
      tap(() => this.spinner.show()),
      switchMap((args) => this.service.fetchPlanetsPaginated(args)),
      takeWhile(() => this.alive),
    ).subscribe((results: PlanetListModel) => {
      this.filteredPlanets = results.planets.splice(0, results.planets.length - results.errorNumber);
      this.collectionSize = results.listSize;
      this.spinner.hide()
    })
  }

  ngOnInit(): void {
    this.spinner.show();
  }

  ngOnDestroy(): void {
    this.alive = false;
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
