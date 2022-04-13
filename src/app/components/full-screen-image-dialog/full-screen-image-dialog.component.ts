import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  src: string;
}

@Component({
  selector: 'app-full-screen-image-dialog',
  templateUrl: './full-screen-image-dialog.component.html',
  styleUrls: ['./full-screen-image-dialog.component.scss'],
})
export class FullScreenImageDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<FullScreenImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
