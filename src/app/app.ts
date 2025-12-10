import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/products">Products</a> |
      <a routerLink="/cart">Cart</a> |
      <a routerLink="/login">Login</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('souqify');
}
