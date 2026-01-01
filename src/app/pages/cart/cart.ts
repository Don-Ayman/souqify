import { Component } from '@angular/core';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart {
  cart: CartItem[] = [];

  addToCart(product: { name: string; price: number }) {
    const existing = this.cart.find(item => item.name === product.name);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.updateCart();
  }

  increaseQuantity(index: number) {
    this.cart[index].quantity += 1;
    this.updateCart();
  }

  decreaseQuantity(index: number) {
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity -= 1;
    } else {
      this.cart.splice(index, 1);
    }
    this.updateCart();
  }

  updateCart() {
    // In Angular, cart items are rendered with *ngFor in the HTML, so no need for innerHTML
    // This function is just here if you want to do extra updates
  }

  showPaymentForm = false;

  confirmPayment(name: string, card: string, exp: string, cvv: string) {
    if (!name || !card || !exp || !cvv) {
      alert('Please fill all fields.');
      return;
    }
    alert(`Thank you, ${name}! Your payment is successful.`);
    this.cart = [];
    this.showPaymentForm = false;
  }
}
