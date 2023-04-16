import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {

  articleDate = new Date('2023-03-10').toLocaleString('pt-br');

  @Input() articlePhotoDefault: string = '';
  @Input() articlePhotoMobile: string = '';
  @Input() articlePhotoDesktop: string = '';

  @Input() articleName: string = '';
  @Input() articleNews: string = '';

  ngOnInit(): void { }
}
