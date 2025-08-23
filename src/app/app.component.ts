import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CartComponent } from './Component/cart/cart.component';
import { HeaderComponent } from './Component/header/header.component';
import { MainComponent } from './Component/main/main.component';
import { SuppliersComponent } from './Component/suppliers/suppliers.component';
import { CategoriesComponent } from './Component/categories/categories.component';
import { ProductCardComponent } from './Component/Products-Card/product-card/product-card.component';
import { HomeComponent } from './Component/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CartComponent,
    HeaderComponent,
    MainComponent,
    SuppliersComponent,
    CategoriesComponent,
    ProductCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Project';
}
