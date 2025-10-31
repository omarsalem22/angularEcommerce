import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-order',
  imports: [FormsModule, CommonModule, ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements AfterViewInit {
  categories: Icategory[];
  recievedproducts: Iproduct[] = [];
  selectedCatId: number = 0;
  @ViewChild('userName') myname!: ElementRef;

  constructor() {
    this.categories = [
      { id: 1, name: 'laptop' },
      { id: 2, name: 'mobile' },
      { id: 3, name: 'taplet' },
    ];
  }
  ngAfterViewInit(): void {
    this.myname.nativeElement.value="omar ";
  }

  addproduct(product: Iproduct) {
    this.recievedproducts.push(product);
  }
}
