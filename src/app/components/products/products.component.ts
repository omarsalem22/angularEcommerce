import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Iproduct[];

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'laptop',
        price: 50000,
        quantity: 3,
        catId: 2,
        imgUrl: 'https://picsum.photos/200',
      },
      {
        id: 2,
        name: 'mobile',
        price: 6300,
        quantity: 5,
        catId: 1,
        imgUrl: 'https://picsum.photos/200',
      },
      {
        id: 2,
        name: 'mobile',
        price: 6300,
        quantity: 5,
        catId: 1,
        imgUrl: 'https://picsum.photos/200',
      },
      {
        id: 3,
        name: 'tele',
        price: 6300,
        quantity: 5,
        catId: 3,
        imgUrl: 'https://picsum.photos/200',
      },
    ];
  }
}
