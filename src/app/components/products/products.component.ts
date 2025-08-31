import { Component, EventEmitter, Input, OnChanges, Output, output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import {
  CommonModule,
  CurrencyPipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartHighlightDirective } from '../../directives/cart-highlight.directive';

@Component({
  selector: 'app-products',
  imports: [
    CommonModule,
    FormsModule,
    CartHighlightDirective,
    CurrencyPipe,
    TitleCasePipe,
    CartHighlightDirective,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnChanges {
  products: Iproduct[];
  filteredProducts: Iproduct[];
  @Input() recievedCatId: number = 0;

  totalOrderPrice: number = 0;

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

    this.filteredProducts = this.products;
    this.onbuy=new EventEmitter<Iproduct>()
  }
  ngOnChanges() {
    this.filterproducts();
  }
  buy(product: Iproduct, price: number) {
    if (product.quantity > 0) {
      product.quantity -= 1;
      this.totalOrderPrice += price;
      this.onbuy.emit(product );

    }
  }
  trackItem(index: number, item: Iproduct) {
    return item.id;
  }
  filterproducts() {
    if (this.recievedCatId == 0) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        (prd) => prd.catId == this.recievedCatId
      );
    }
  }
 @Output() onbuy:EventEmitter<Iproduct>;
}
