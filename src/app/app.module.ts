import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MenuTitleComponent } from './Components/menu-title/menu-title.component';
import { MainCardComponent } from './Components/main-card/main-card.component';
import { OtherCardsComponent } from './Components/other-cards/other-cards.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuTitleComponent,
    MainCardComponent,
    OtherCardsComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
