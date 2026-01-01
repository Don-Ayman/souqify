import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',  // use .component.html
  styleUrls: ['./products.css'],   // use .component.css and 'styleUrls' (plural)
})
export class Products {
  allProducts = [
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

  addToCart(productName: string) {
    alert(`Added ${productName} to cart`);
  }

  filterProducts() {
    const select = (document.getElementById('product-filter') as HTMLSelectElement);
    const filter = select.value;
    const container = document.getElementById('product-list');
    if (!container) return;

    let filtered = this.allProducts;
    if (filter !== 'all') filtered = this.allProducts.filter(p => p.category === filter);

    container.innerHTML = filtered.map((p, i) => `
      <div class="card" data-index="${i}">
        <img src="${p.img}" alt="${p.name} image">
        <h3>${p.name}</h3>
        <div class="price">$${p.price}</div>
        <button onclick="alert('Added ${p.name} to cart')">Add to Cart</button>
      </div>
    `).join('');
  }
}
