import { Component, Input } from '@angular/core';
import { Card } from '../../../utils/data';
import { MatDialog } from '@angular/material/dialog';
import { FullScreenImageDialogComponent } from '../../full-screen-image-dialog/full-screen-image-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card!: Card;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(FullScreenImageDialogComponent, {
      width: '80vw',
      data: { src: this.card.img },
    });
  }

  addToStorage(id: number) {
    console.log(id);
  }
}
