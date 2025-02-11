import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthState, AuthStoreService } from '../../store/auth-store.service.js';
import { TodoFormComponent } from '../todo-form/todo-form.component.js';

@Component({
  selector: 'app-todo-page',
  imports: [TodoFormComponent],
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent {
  auth: AuthState;

  constructor(private authStore: AuthStoreService, private router: Router) {
    this.auth = this.authStore.getAuth();
  }

  logout(): void {
    this.authStore.clearAuth();
    this.auth = this.authStore.getAuth();
    this.router.navigate(['/']);
  }
  //   logout(): void {
  //     this.authStoreService.clearAuth();
  //     this.router.navigate(['/']);
  //   }
}
