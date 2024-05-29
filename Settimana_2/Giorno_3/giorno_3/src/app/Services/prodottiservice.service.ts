import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdottiserviceService {

  private url = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getProdotti(): Observable<any> {
    return this.http.get(this.url);
  }
}



