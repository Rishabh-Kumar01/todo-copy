import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthState, AuthStoreService } from '../../store/auth-store.service.js';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent {
  auth: AuthState;

  constructor(private authStore: AuthStoreService, private router: Router) {
    // Immediately retrieve the current authentication state.
    this.auth = this.authStore.getAuth();
  }

  logout(): void {
    // Clear auth state in the service.
    this.authStore.clearAuth();
    // Update the local property manually.
    this.auth = this.authStore.getAuth();
    this.router.navigate(['/']);
  }
  //   logout(): void {
  //     this.authStoreService.clearAuth();
  //     this.router.navigate(['/']);
  //   }
}
