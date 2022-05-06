import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoTypes } from './photo.types';
import { BehaviorSubject } from 'rxjs';
import { searchPhotosUrl } from './helper';
import { QueryParams } from './config';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private result$ = new BehaviorSubject<PhotoTypes[]>([]);
  private isSearchStarted$ = new BehaviorSubject<boolean>(false);
  searchResult$ = this.result$.asObservable();
  searchStarted$ = this.isSearchStarted$.asObservable();

  constructor(private http: HttpClient) {}

  public setPhotos(photos: PhotoTypes[]) {
    this.isSearchStarted$.next(true);
    this.result$.next(photos);
  }

  public searchPhotos(query: QueryParams) {
    return this.http.get(searchPhotosUrl(query)).subscribe((response: any) => {
      this.setPhotos(response.photos.photo);
    });
  }
}
