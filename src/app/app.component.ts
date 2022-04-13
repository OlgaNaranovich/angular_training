import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'photoStorage';
  content = [
    {
      title: '',
      image: '',
      tags: ['', ''],
    },
  ];

  getSome() {
    return this.title ? 1 : 'y';
  }
}
