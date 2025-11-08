import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  constructor(private httpClient: HttpClient) {}
  getAllProducts(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${environment.baseUrl}products`);
  }
  getProductsById(id: number): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(
      `${environment.baseUrl}/products/${id}`
    );
  }
  getProductsByCatId(catID: number): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(
      `${environment.baseUrl}/products?catId=${catID}`
    );
  }
  addProduct() {}
  deletProdcut() {}

  mapProductsToIds(): Observable<number[]> {
    return this.httpClient
      .get<Iproduct[]>(`${environment.baseUrl}products`)
      .pipe(map((prds: Iproduct[]) => prds.map((prd: Iproduct) => prd.id)));
  }
}
