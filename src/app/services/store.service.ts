import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  url = 'https://fakestoreapi.com/products'
  constructor(private _htpp: HttpClient) { }

  getAllProductos(): Observable<any> {
    return this._htpp.get<any>(this.url)
  }
  getAllProductosById(id: number): Observable<any> {
    return this._htpp.get<any>(`${this.url}/${id}`)
  }
}
