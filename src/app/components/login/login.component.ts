import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service.js';
import { FormsModule } from '@angular/forms';
import { AuthStoreService } from '../../store/auth-store.service.js';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private authStoreService: AuthStoreService
  ) {}

  login(): void {
    this.authService
      .login({ username: this.username, password: this.password })
      .subscribe({
        next: (res) => {
          const message = res?.message?.trim() || 'Login successful';
          if (res.success && res.data) {
            const { token, isSuperUser } = res.data;
            this.authStoreService.setAuth(token, this.username, isSuperUser);

            if (isSuperUser) {
              this.router.navigate(['/manage-users']);
            } else {
              this.router.navigate(['/todos']);
            }
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
