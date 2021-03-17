import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() numberOfPages: number;
  @Output() currPage = new EventEmitter<number>();
  pageOptions: number[];

  currentPage = 1;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.pageOptions = [
      this.currentPage - 2,
      this.currentPage - 1,
      this.currentPage,
      this.currentPage + 1,
      this.currentPage + 2
    ].filter(pageNumber => pageNumber >= 1 && pageNumber <= this.numberOfPages)
    console.log(this.numberOfPages);
    
  }

  onPageClick(page: number) {
    this.currPage.emit(page);
    this.currentPage = page;
  }

}
