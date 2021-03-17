import { Component, OnInit } from '@angular/core';

import { StorageService } from '../storage.service';
import { Photo } from '../../search/search.service';

@Component({
  selector: 'app-bookmarks-list',
  templateUrl: './bookmarks-list.component.html',
  styleUrls: ['./bookmarks-list.component.css']
})
export class BookmarksListComponent implements OnInit {
  bookmarked = this.storageService.get('bookmarks');

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
  }

}
