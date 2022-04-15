import { Component, OnInit } from '@angular/core';
import { Card, cards } from '../../utils/data';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  cardsList!: Card[];

  ngOnInit() {
    this.cardsList = cards;
  }
}
