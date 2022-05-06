import { Component } from '@angular/core';
import { PhotoService } from '../../services/photo/photo.service';
import { photoRequestConfig } from '../../services/photo/config';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  text: string = '';
  tags: string = '';

  constructor(private photoService: PhotoService) {}

  searchPhoto() {
    const queryParams = {
      ...photoRequestConfig.queryParams,
      text: this.text,
      tags: this.tags || this.text,
    };

    this.photoService.searchPhotos(queryParams);
  }
}
