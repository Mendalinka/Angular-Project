import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from './Component/cart/cart.component';
import { HeaderComponent } from './Component/header/header.component';
import { MainComponent } from './Component/main/main.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CartComponent,HeaderComponent,MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Project';
}
