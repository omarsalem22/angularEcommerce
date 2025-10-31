import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProductsService {
  products: Iproduct[];

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'laptop',
        price: 5000000,
        quantity: 3,
        catId: 1,
        imgUrl: 'https://picsum.photos/200',
      },
      {
        id: 2,
        name: 'mobile1',
        price: 6300,
        quantity: 5,
        catId: 2,
        imgUrl: 'https://picsum.photos/200',
      },

      {
        id: 3,
        name: 'mobile2',
        price: 6300,
        quantity: 0,
        catId: 2,
        imgUrl: 'https://picsum.photos/200',
      },
      {
        id: 4,
        name: 'taplet',
        price: 6300,
        quantity: 5,
        catId: 3,
        imgUrl: 'https://picsum.photos/200',
      },
      {
        id: 5,
        name: 'taplet2',
        price: 630,
        quantity: 1,
        catId: 3,
        imgUrl: 'https://picsum.photos/200',
      },
      {
        id: 6,
        name: 'hp laptop',
        price: 50000,
        quantity: 3,
        catId: 1,
        imgUrl: 'https://picsum.photos/200',
      },
    ];
  }
  getAllProducts(): Iproduct[] {
    return [...this.products];
  }
  getProductById(id: number): Iproduct | null {
    let product = this.products.find((prd) => prd.id == id);
    return product ? product : null;
  }

  getProductsByCatId(catId: number): Iproduct[] {
    if (catId==0){
      return[...this.products ] 
    }
    else{

      return this.products.filter((prd) => prd.catId == catId);
    }
  }
}
