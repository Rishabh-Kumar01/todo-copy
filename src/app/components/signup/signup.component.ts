import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AuthStoreService } from '../../store/auth-store.service.js';

@Component({
  selector: 'app-signup',
  imports: [RouterModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private authStoreService: AuthStoreService
  ) {}

  signup(): void {
    this.authService
      .sigup({ username: this.username, password: this.password })
      .subscribe({
        next: (res) => {
          const message = res?.message?.trim() || 'Signup successful';
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
