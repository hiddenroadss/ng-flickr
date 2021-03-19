import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface PageEvent {
  length: number;
  pageIndex: number;
  pageSize: number;
  previousPageIndex: number
}

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() numberOfPages: number;
  @Output() currPage = new EventEmitter<number>();

  currentPage = 1;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.numberOfPages); 
  }

  onPageClick(page: PageEvent) {
    this.currPage.emit(page.pageIndex);
    this.currentPage = page.pageIndex;
    
  }

}
