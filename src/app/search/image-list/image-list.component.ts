import { Component, OnInit } from '@angular/core';

import { SearchService } from '../search.service';
import { StorageService } from '../../bookmarks/storage.service';
import { Photo } from '../search.service';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: Photo[];
  pages: number;

  constructor(private searchService: SearchService, private storageService: StorageService) { 
    
  }

  ngOnInit(): void { 
    this.searchService.pagesOutput.subscribe(images => {
      this.images = images;
      this.pages = this.searchService.numberOfPages;
      
    })
  }

  onPageClick(page: number) {
    this.searchService.pagesInput.next(page);
  }

  onBookmarkClick(image: Photo) {
    this.storageService.setImages('bookmarks', image);
  }

  setGridRowEnd(height: number) {
    const spans = Math.ceil(height / 10);
    return {
      'grid-row-end': `span ${spans}`
    }
  }

  
}
