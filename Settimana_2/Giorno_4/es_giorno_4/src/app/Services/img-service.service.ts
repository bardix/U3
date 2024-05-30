import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { IIMG } from '../Modules/i-img'; // Importa l'interfaccia IIMG

@Injectable({
  providedIn: 'root'
})
export class ImgServiceService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  private likeCounter = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<IIMG[]> {
    return this.http.get<IIMG[]>(this.apiUrl);
  }

  deletePhoto(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  incrementLikeCounter(): void {
    this.likeCounter.next(this.likeCounter.value + 1);
  }

  getLikeCounter(): Observable<number> {
    return this.likeCounter.asObservable();
  }
}

