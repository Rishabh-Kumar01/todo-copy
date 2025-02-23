import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthState, AuthStoreService } from '../../store/auth-store.service.js';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from '../todo-form/todo-form.component.js';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
  imports: [CommonModule, TodoFormComponent],
})
export class TodoPageComponent implements OnInit {
  constructor(private authStore: AuthStoreService, private router: Router) {
    // Immediately retrieve the current authentication state.
    // this.auth = this.authStore.getAuth();
  }

  auth$!: Observable<{
    token: string | null;
    username: string | null;
    isSuperUser: boolean;
  }>;

  ngOnInit(): void {
    this.auth$ = this.authStore.auth$;
  }

  // logout(): void {
  //   // Clear auth state in the service.
  //   this.authStore.clearAuth();
  //   // Update the local property manually.
  //   this.auth = this.authStore.getAuth();
  //   this.router.navigate(['/']);
  // }
  logout(): void {
    this.authStore.clearAuth();
    this.router.navigate(['/']);
  }
}
