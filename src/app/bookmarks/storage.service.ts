import { Injectable } from '@angular/core';

import { Photo } from '../search/search.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  localStorage: Storage;

  constructor() { 
    this.localStorage = window.localStorage;
  }

  get isLocalStorageSupported() {
    return !!this.localStorage;
  }

  get(key: string) {
    if (this.isLocalStorageSupported) {
      return JSON.parse(this.localStorage.getItem(key));
    }
    return null;
  }

  set(key: string, value: any) {
    if (this.isLocalStorageSupported) {
      this.localStorage.setItem(key, JSON.stringify(value));
      
      return true;
    }

    return false;
  }

  remove(key: string) {
    if (this.isLocalStorageSupported) {
      this.localStorage.removeItem(key);
      return true;
    }

    return false;
  }

  setImages(key: string, value: any) {
    if (this.isLocalStorageSupported) {
      if (key === 'bookmarks' && this.localStorage.getItem(key)) {
        const bookmarks = JSON.parse(this.localStorage.getItem(key));
        
        this.localStorage.setItem(key, JSON.stringify([...bookmarks, value]));
      } else {
        this.localStorage.setItem(key, JSON.stringify([value]));
      }  
      return true;
    }
    return false;
  }

  removeImages(key: string, value: Photo) {
    if (this.isLocalStorageSupported) {
      const bookmarks: Photo[] = JSON.parse(this.localStorage.getItem(key));
      if (bookmarks) {
        const updatedBookmarks = bookmarks.filter(bookmark => JSON.stringify(bookmark) !== JSON.stringify(value));
        
        this.localStorage.setItem(key, JSON.stringify(updatedBookmarks));
      }
      return true;
    }
    return false;
  }
}
