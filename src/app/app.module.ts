import { NgModule, input } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
// Angular Material
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { TurmasComponent } from './pages/turmas/turmas.component';
import { InglesComponent } from './pages/ingles/ingles.component';
import { EspanholComponent } from './pages/espanhol/espanhol.component';
import { DepoimentosComponent } from './pages/depoimentos/depoimentos.component';
import { ContatoComponent } from './pages/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    TurmasComponent,
    InglesComponent,
    EspanholComponent,
    DepoimentosComponent,
    ContatoComponent,
    NavMenuComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
