import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FullScreenImageDialogComponent } from '../../full-screen-image-dialog/full-screen-image-dialog.component';
import { PhotoTypes } from '../../../services/photo/photo.types';
import { getPhotoUrl } from './helper';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() photo!: PhotoTypes;
  photoUrl!: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    const { server, id, secret } = this.photo;

    this.photoUrl = getPhotoUrl(server, id, secret, 'b');
  }

  openDialog(): void {
    this.dialog.open(FullScreenImageDialogComponent, {
      width: '80vw',
      data: { src: this.photoUrl },
    });
  }

  addToStorage(id: string) {
    console.log(id);
  }
}
