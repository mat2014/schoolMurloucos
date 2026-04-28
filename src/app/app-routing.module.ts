import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepoimentosComponent } from './pages/depoimentos/depoimentos.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { TurmasComponent } from './pages/turmas/turmas.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { InglesComponent } from './pages/ingles/ingles.component';
import { EspanholComponent } from './pages/espanhol/espanhol.component';

const routes: Routes = [
  {path: 'depoimentos', component: DepoimentosComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'contato', component: ContatoComponent},
  {path: 'turmas',component:TurmasComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'ingles', component: InglesComponent},
  {path: 'espanhol',component: EspanholComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
