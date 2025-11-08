import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StaticProductsService } from '../../services/static-products.service';
import { Iproduct } from '../../models/iproduct';
import { Location } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  currentId: number = 0;
  product: Iproduct | undefined;
  idsArr: number[];
  currendIdIndex: number = 0;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private __apiProductsService: ApiProductsService,
    private _locaton: Location,
    private router: Router
  ) {
    this.__apiProductsService.mapProductsToIds().subscribe({
      next: (ids: number[]) => {
        this.idsArr = ids;
      },
      error: (err) => {
        console.error('Error fetching product IDs:', err);
      }
    });  
      // this.currendIdIndex=
  }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((paramMap) => {
      this.currentId = Number(paramMap.get('id'));
       this.__apiProductsService.getProductsById(this.currentId).subscribe({
        next: (res) => {
          this.product = res;
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
    // this.currentId = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    // this.product = this.__StaticProductsService.getProductById(this.currentId);
  }

  goBack() {
    this._locaton.back();
  }

  next() {
    this.currendIdIndex = this.idsArr.findIndex((id) => id == this.currentId);
    if (this.currendIdIndex != this.idsArr.length - 1) {
      this.router.navigateByUrl(
        `/details/${this.idsArr[this.currendIdIndex + 1]}`
      );
    }
  }
  prev() {
    this.currendIdIndex = this.idsArr.findIndex((id) => id == this.currentId);
    if (this.currendIdIndex != 0) {
      this.router.navigateByUrl(
        `/details/${this.idsArr[this.currendIdIndex - 1]}`
      );
    }
  }
}
