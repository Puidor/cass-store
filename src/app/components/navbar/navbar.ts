import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  authService = inject(AuthService);
  cartService = inject(CartService);

  isAuthenticated = this.authService.isAuthenticated;
  totalCartItems = this.cartService.totalItems;

  logout(): void {
    this.authService.logout();
  }
}
