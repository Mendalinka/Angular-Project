import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HomeComponent,
    CategoriesComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
