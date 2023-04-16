import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-cards',
  templateUrl: './other-cards.component.html',
  styleUrls: ['./other-cards.component.css']
})
export class OtherCardsComponent implements OnInit {

  newsDate = new Date('2023-03-18').toLocaleString('pt-br');

  @Input() newsAlt: string = '';

  data = [
    { img: "https://lumiere-a.akamaihd.net/v1/images/5f68a4f290e3d800015740f5-image_dfc26bb3.jpeg?region=0,0,1536,864&width=768", description: "Djin Djarinn é capturado por Moff Gideon após tentativa de reconhecimento de Mandalor.", alt: "Djinn Djarinn" },
    { img: "https://cdn.ome.lt/UURx8OJ12E6bVzPvIyE7CyzZmOc=/1200x630/smart/extras/conteudos/yoda_HmxcX1G.jpg", description: "Grogo fica feliz ao receber seu novo brinquedinho, um droid IG-12.", alt: "Grogo" },
    { img: "https://lumiere-a.akamaihd.net/v1/images/bo-katan_kryze_the_mandalorian_02_b7dba64d.jpeg?region=154,0,892,502", description: "Boka-tan se frusta ao cair em amardilha e fica preocupada com mando.", alt: "Boka-tan" }
  ];

  ngOnInit(): void { }


}
