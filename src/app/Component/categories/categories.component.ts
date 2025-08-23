import { Component } from '@angular/core';
import { CardContentComponent } from './Card/card-content/card-content.component';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CardContentComponent,],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

}
