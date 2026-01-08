import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  cart$ = new BehaviorSubject<CartItem[]>([]);

  addToCart(product: { name: string; price: number }) {
    const existing = this.cartItems.find(item => item.name === product.name);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.cart$.next([...this.cartItems]); // met à jour tous les abonnés
  }

  getCart() {
    return this.cart$.asObservable();
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  clearCart() {
    this.cartItems = [];
    this.cart$.next([]);
  }
}
