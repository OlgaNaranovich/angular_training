import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo/photo.service';
import { PhotoTypes } from '../../services/photo/photo.types';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  searchResultPhoto!: PhotoTypes[];
  isSearchStarted: boolean = false;
  noResultMessage!: string | null;

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.searchStarted$.subscribe((value) => {
      this.isSearchStarted = value;
    });

    this.photoService.searchResult$.subscribe((value) => {
      if (!value.length && this.isSearchStarted) {
        this.noResultMessage = 'Nothing found';
      } else {
        this.noResultMessage = null;
      }

      this.searchResultPhoto = value;
    });
  }
}
