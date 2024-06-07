import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { iUser } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users'; // URL del tuo backend
  private userSubject = new BehaviorSubject<iUser | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

  getUsers(): Observable<iUser[]> {
    return this.http.get<iUser[]>(this.apiUrl);
  }

  setUser(user: iUser): void {
    this.userSubject.next(user);
  }
}
