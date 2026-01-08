import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service'; // chemin selon ton projet

interface Product {
  name: string;
  price: number;
  category: string;
  img: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  standalone: true,
  imports: [NgFor, FormsModule]
})
export class Products {
  allProducts: Product[] = [
    { name: "Redmi Note 13", price: 299, category: "portables", img: "PASTE URL 1" },
    { name: "Redmi Note 14", price: 349, category: "portables", img: "PASTE URL 2" },
    { name: "Samsung Galaxy S23", price: 799, category: "portables", img: "PASTE URL 3" },
    { name: "Samsung Galaxy S24", price: 899, category: "portables", img: "PASTE URL 4" },
    { name: "Xiaomi 13", price: 599, category: "portables", img: "PASTE URL 5" },
    { name: "Xiaomi 14", price: 699, category: "portables", img: "PASTE URL 6" },
    { name: "Dell XPS 13", price: 1200, category: "pc-portables", img: "PASTE URL 7" },
    { name: "Dell Inspiron 15", price: 900, category: "pc-portables", img: "PASTE URL 8" },
    { name: "HP Pavilion 14", price: 850, category: "pc-portables", img: "PASTE URL 9" },
    { name: "HP Envy 15", price: 1300, category: "pc-portables", img: "PASTE URL 10" },
    { name: "Lenovo ThinkPad X1", price: 1400, category: "pc-portables", img: "PASTE URL 11" },
    { name: "Lenovo Yoga 7", price: 1100, category: "pc-portables", img: "PASTE URL 12" },
    { name: "AirPods Pro", price: 249, category: "accessoires", img: "PASTE URL 13" },
    { name: "Logitech Mouse", price: 49, category: "accessoires", img: "PASTE URL 14" },
    { name: "Keyboard Mechanical", price: 89, category: "accessoires", img: "PASTE URL 15" },
    { name: "Charger 65W", price: 39, category: "accessoires", img: "PASTE URL 16" },
    { name: "Power Bank 10000mAh", price: 29, category: "accessoires", img: "PASTE URL 17" },
    { name: "USB-C Hub", price: 59, category: "accessoires", img: "PASTE URL 18" }
  ];

  filteredProducts: Product[] = [...this.allProducts];
  selectedCategory: string = 'all';

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart({ name: product.name, price: product.price });
  }

  filterProducts() {
    if (this.selectedCategory === 'all') {
      this.filteredProducts = [...this.allProducts];
    } else {
      this.filteredProducts = this.allProducts.filter(p => p.category === this.selectedCategory);
    }
  }
}
