import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('menuList') menuList!: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  showMenuMobile() {
    if (window.screen.width < 1024) {
      if (this.menuList.nativeElement.style.display === 'none' || this.menuList.nativeElement.style.display == '') {
        this.menuList.nativeElement.style.display = 'flex';
      } else {
        this.menuList.nativeElement.style.display = 'none';
      }
    }

    if (window.screen.width >= 1024) {
      this.menuList.nativeElement.style.display = 'flex';
    }

  }

  verifySizeScreen() {
    console.log(window.screen.width);
  }

}
