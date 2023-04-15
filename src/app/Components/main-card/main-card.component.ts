import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent {
  articleDate = new Date('2023-03-10').toLocaleString('pt-br');

  @Input() articleName: string = '';

}
