import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service'; // chemin selon ton projet
import { Product } from '../../models/product.model';



@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  standalone: true,
  imports: [NgFor, FormsModule]
})
export class Products {
  allProducts: Product[] = [
    { name: "Redmi Note 13", price: 299, category: "portables", img: "image/38c91037333e6412aebe0954985af359.jpg" },
    { name: "Redmi Note 14", price: 349, category: "portables", img: "image/1736739227126-Redmi-Note-14-4G-Ge.jpg" },
    { name: "Samsung Galaxy S23", price: 799, category: "portables", img: "image/1_SamsungS23_Lavande_184x187.webp" },
    { name: "Samsung Galaxy S24", price: 899, category: "portables", img: "image/samsung-galaxy-s24-5g-sm-s921b-dual-sim-8gb-ram-128gb.jpg" },
    { name: "Xiaomi 13", price: 599, category: "portables", img: "image/OIP.webp" },
    { name: "Xiaomi 14", price: 699, category: "portables", img: "image/HE2fXamFQW8qFZEhsbYFc5.jpg" },
    { name: "Dell XPS 13", price: 1200, category: "pc-portables", img: "image/ultrabook-Dell-XPS-132.webp" },
    { name: "Dell Inspiron 15", price: 900, category: "pc-portables", img: "image/61jjZLA70hL._AC_SL1500_.jpg" },
    { name: "HP Pavilion 14", price: 850, category: "pc-portables", img: "image/OIP (1).webp" },
    { name: "HP Envy 15", price: 1300, category: "pc-portables", img: "image/OIP (2).webp" },
    { name: "Lenovo ThinkPad X1", price: 1400, category: "pc-portables", img: "image/R.jpeg" },
    { name: "Lenovo Yoga 7", price: 1100, category: "pc-portables", img: "image/71NHJXu1C+L._AC_.jpg" },
    { name: "AirPods Pro", price: 249, category: "accessoires", img: "image/MTJV3.jpeg" },
    { name: "Logitech Mouse", price: 49, category: "accessoires", img: "image/OIP (3).webp" },
    { name: "Keyboard Mechanical", price: 89, category: "accessoires", img: "image/R (1).jpeg" },
    { name: "Charger 65W", price: 39, category: "accessoires", img: "image/main.jpg" },
    { name: "Power Bank 10000mAh", price: 29, category: "accessoires", img: "image/61mEjaQTPQL._AC_SL1500_.jpg" },
    { name: "USB-C Hub", price: 59, category: "accessoires", img: "image/61QbS525pgL._AC_.jpg" }
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
