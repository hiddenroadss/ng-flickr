import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { map, switchMap, tap, pluck } from 'rxjs/operators';


export interface Photo {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
}

interface FlickrResponse {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    photo: Photo[];
  }
  stat: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = 'https://api.flickr.com/services/rest';
  api_key = '6cc3caaa3588ea19260712eac590ccf4';
  method = 'flickr.photos.search';
  tag = '';
  per_page = 10;
  numberOfPages = 0;

  pagesInput: Subject<number>;
  pagesOutput: Observable<Photo[]>;

  constructor(private http: HttpClient) { 
    this.pagesInput = new Subject();
    this.pagesOutput = this.pagesInput.pipe(
      map(page => {
        return new HttpParams()
          .set('api_key', this.api_key)
          .set('method', this.method)
          .set('format', 'json')
          .set('nojsoncallback', '1')
          .set('per_page', String(this.per_page))
          .set('page', String(page))
          .set('tags', this.tag)
      }),
      switchMap(params => this.http.get<FlickrResponse>(this.url, {params})),
      tap(response => this.numberOfPages = response.photos.pages),
      pluck('photos', 'photo')
    );
  }

  getPage(page: number) {
    this.pagesInput.next(page);
  }
}
