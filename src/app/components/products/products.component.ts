import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  output,
  SimpleChanges,
} from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import {
  CommonModule,
  CurrencyPipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartHighlightDirective } from '../../directives/cart-highlight.directive';
import { StaticProductsService } from '../../services/static-products.service';
import {  Router, RouterLink } from '@angular/router';

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

  constructor(private _StaticProductsService: StaticProductsService ,private router :Router) {
    this.products = this._StaticProductsService.getAllProducts();
    

    this.filteredProducts = this.products;
    this.onbuy = new EventEmitter<Iproduct>();
  }
  ngOnChanges() {
    const filtered = this._StaticProductsService.getProductsByCatId(
      this.recievedCatId
    );
    this.filteredProducts = filtered ?? [];
  }
  buy(product: Iproduct, price: number) {
    if (product.quantity > 0) {
      product.quantity -= 1;
      this.totalOrderPrice += price;
      this.onbuy.emit(product);
    }
  }
  trackItem(index: number, item: Iproduct) {
    return item.id;
  }

  navigateToDetails(id :number){
    this.router.navigateByUrl(`/details/${id}`)

  }
  // filterproducts() {
  //   if (this.recievedCatId == 0) {
  //     this.filteredProducts = this.products;
  //   } else {
  //     this.filteredProducts = this.products.filter(
  //       (prd) => prd.catId == this.recievedCatId
  //     );
  //   }
  // }
  @Output() onbuy: EventEmitter<Iproduct>;
}
