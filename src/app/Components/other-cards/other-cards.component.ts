import { Component } from '@angular/core';

@Component({
  selector: 'app-other-cards',
  templateUrl: './other-cards.component.html',
  styleUrls: ['./other-cards.component.css']
})
export class OtherCardsComponent {
  news: string[] = [];

  newsDate = new Date('2023-03-18').toLocaleString('pt-br');
}
