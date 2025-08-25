import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private authService = inject(AuthService);

  credentials = {
    username: 'mor_2314',
    password: '83r5^_',
  };

  loginError = false;

  onSubmit(): void {
    this.loginError = false;
    this.authService.login(this.credentials).subscribe({
      error: (err) => {
        console.error('Falha no login', err);
        this.loginError = true;
      },
    });
  }
}
