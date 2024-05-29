import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJson } from '../Modules/i-json';

@Injectable({
  providedIn: 'root'
})
export class ProdottiserviceService {

  private url = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getProdotti(): Observable<IJson> {
    return this.http.get<IJson>(this.url);
  }

}



