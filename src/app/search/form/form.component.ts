import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { debounceTime, tap, distinctUntilChanged } from 'rxjs/operators';

import { SearchService } from '../search.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  searchForm = new FormGroup({
    search: new FormControl('')
  });

  constructor(private searchService: SearchService) { 
    this.searchForm.valueChanges.pipe(
      debounceTime(700),
      distinctUntilChanged(),
      tap(value => {
        this.searchService.tag = value.search;
        this.searchService.pagesInput.next(1);
      })
    ).subscribe(() => { })
  }

  ngOnInit(): void {
  }

}
