import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PlanetModel } from "../../model/planet.model";
import { SearchPipe } from "../../pipe/search.pipe";

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnChanges {
  @Input() planetList: PlanetModel[];
  filteredPlanets: PlanetModel[];
  query: string;
  page: number = 1;
  pageSize: number = 5;
  collectionSize: number;
  pageSizes: Array<number> = [5, 10, 25, 100];

  constructor(private searchPipe: SearchPipe) {}

  ngOnChanges() {
    this.filteredPlanets = this.planetList;
    this.collectionSize = this.planetList ? this.planetList.length : 0;
  }

  onSearch() {
    this.filteredPlanets = this.searchPipe.transform(this.planetList, 'name', this.query);
    this.collectionSize = this.filteredPlanets.length;
  }

  changePageSize(size: number) {
    this.pageSize = size;
  }
}
