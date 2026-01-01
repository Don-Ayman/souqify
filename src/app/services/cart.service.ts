import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];

  // Observable pour que les composants se mettent à jour automatiquement
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  getCart() {
    return this.cartItems;
  }

  addToCart(product: { name: string; price: number }) {
    const existing = this.cartItems.find(item => item.name === product.name);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.cartSubject.next(this.cartItems);
  }

  increaseQuantity(index: number) {
    this.cartItems[index].quantity += 1;
    this.cartSubject.next(this.cartItems);
  }

  decreaseQuantity(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity -= 1;
    } else {
      this.cartItems.splice(index, 1);
    }
    this.cartSubject.next(this.cartItems);
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }
}
