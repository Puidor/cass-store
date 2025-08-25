// src/app/services/auth.service.ts
import { Injectable, signal, inject, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

interface AuthToken {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = 'https://fakestoreapi.com';
  private http = inject(HttpClient);
  private router = inject(Router);

  isAuthenticated = signal<boolean>(this.hasToken());

  constructor() {}

  private hasToken(): boolean {
    return !!localStorage.getItem('authToken');
  }

  login(credentials: {
    username: string;
    password: string;
  }): Observable<AuthToken> {
    return this.http
      .post<AuthToken>(`${this.apiUrl}/auth/login`, credentials)
      .pipe(
        tap((response) => {
          localStorage.setItem('authToken', response.token);
          this.isAuthenticated.set(true);
          this.router.navigate(['/home']);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.isAuthenticated.set(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
