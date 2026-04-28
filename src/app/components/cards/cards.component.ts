import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})

export class CardsComponent {
    @Input() titulo!: string;
  @Input() subtitulo!: string;
  @Input() imagem!: string;
  @Input() descricao!: string;
  @Input() estrelaImg!: string;
}
