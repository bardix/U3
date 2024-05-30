import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJson } from '../Modules/i-json';
import { IProduct } from '../Modules/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProdottiserviceService {
  getProdottiPreferiti(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.url}/favourites`);
  }

  private url = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getProdotti(): Observable<IJson> {
    return this.http.get<IJson>(this.url);
  }

  modificaProdotti(id: number, prodotto: any): Observable<any> {
    const urlModifica = `${this.url}/${id}`;
    return this.http.put(urlModifica, prodotto);
  }

  aggiungiProdotto(prodotto: any): Observable<any> {
    return this.http.post(this.url, prodotto);
  }

  eliminaProdotto(id: number): Observable<any> {
    const urlElimina = `${this.url}/${id}`;
    return this.http.delete(urlElimina);
  }
}
