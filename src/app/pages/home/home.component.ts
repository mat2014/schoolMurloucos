import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
tiles = [
  { text: 'hero', cols: 4, rows: 3 },
  { text: 'sobre', cols: 4, rows: 1 },
  { text: 'card1', cols: 1, rows: 1 },
  { text: 'card2', cols: 1, rows: 1 },
  { text: 'card3', cols: 1, rows: 1 },
  { text: 'cta', cols: 4, rows: 1 },
];
}
