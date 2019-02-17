import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() page: number;
  @Input() pageSize: number;
  @Input() collectionSize: number;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  @Output() pageSizeChange: EventEmitter<number> = new EventEmitter();

  pageSizes: Array<number> = [5, 10, 25, 100];


  constructor() { }

  ngOnInit() {
  }

  onPageChange(event: number) {
    this.pageChange.emit(event)
  }

  changePageSize(size: number) {
    this.pageSizeChange.emit(size)
  }
}
