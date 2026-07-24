import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  products = [
    { id: 1, name: 'Laptop', price: 55000 },
    { id: 2, name: 'Mouse', price: 500 },
    { id: 3, name: 'Keyboard', price: 1200 },
    { id: 4, name: 'Monitor', price: 18000 }
  ];

}