import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { CartService } from '../../services/cart.service'; // <- chemin selon ton projet
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
  standalone: true,
  imports: [NgIf, NgFor]
})
export class Cart {
  cart: any[] = [];
  showPaymentForm = false;
  private sub: Subscription;

  constructor(private cartService: CartService) {
    this.sub = this.cartService.getCart().subscribe(items => {
      this.cart = items;
    });
  }

  increaseQuantity(index: number) {
    this.cartService.addToCart(this.cart[index]);
  }

  decreaseQuantity(index: number) {
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity -= 1;
    } else {
      this.cart.splice(index, 1);
    }
  }

  getTotal() {
    return this.cartService.getTotal();
  }

  checkout() {
    if (this.cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }
    this.showPaymentForm = true;
  }

  confirmPayment(name: string, card: string, exp: string, cvv: string) {
    if (!name || !card || !exp || !cvv) {
      alert('Please fill all fields.');
      return;
    }
    alert(`Thank you, ${name}! Your payment is successful.`);
    this.cartService.clearCart();
    this.showPaymentForm = false;
  }
}
