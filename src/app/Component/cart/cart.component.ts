import { Component } from '@angular/core';
import { NavigationButtonComponent } from './Navigation/navigation-button/navigation-button.component';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NavigationButtonComponent,
    RouterLink
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
