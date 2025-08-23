import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-button',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.css'
})
export class NavigationButtonComponent {
  showModal(){
    this.router.navigate(['/categories']);
  }

  constructor(private readonly router: Router){

  }
}
