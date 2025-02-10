import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <h1>Welcome</h1>
      <button (click)="navigateTo('login')">Login</button>
      <button (click)="navigateTo('signup')">Signup</button>
    </div>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate(['/' + route]);
  }
}
