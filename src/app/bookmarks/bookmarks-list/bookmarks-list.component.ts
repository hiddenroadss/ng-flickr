import { Component, OnInit } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

import { StorageService } from '../storage.service';
import { Photo } from '../../search/search.service';

@Component({
  selector: 'app-bookmarks-list',
  templateUrl: './bookmarks-list.component.html',
  styleUrls: ['./bookmarks-list.component.css']
})
export class BookmarksListComponent implements OnInit {
  bookmarked$ = new BehaviorSubject(this.storageService.get('bookmarks'));

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
  }

  onBookmarkRemove(image: Photo) {
    this.storageService.removeImages('bookmarks', image);
    this.bookmarked$.next(this.storageService.get('bookmarks'));
  }


  setGridRowEnd(height: number) {
    const spans = Math.ceil(height / 10);
    return {
      'grid-row-end': `span ${spans}`
    }
  }

  show(bla: any) {
    console.log(bla);
    
  }


}
