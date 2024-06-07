import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { iUser } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = localStorage.getItem('token');
  private authStatusListener = new BehaviorSubject<boolean>(false);
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {}
  getToken(): string | null {
    return this.token;
  }

  getAuthStatusListener(): Observable<any> {
    return this.authStatusListener.asObservable();
  }

  login(email: string, password: string): void {
    this.http.post<{ token: string, user: iUser }>('http://localhost:3000/login', { email, password })
      .subscribe(response => {
        this.token = response.token;
        localStorage.setItem('token', this.token);
        this.authStatusListener.next(true);
        this.router.navigate(['/']);
      });
  }

  register(user: iUser): void { // Modifica questa linea
    this.http.post<{ token: string, user: iUser }>('http://localhost:3000/register', user) // Modifica questa linea
      .subscribe(response => {
        this.token = response.token;
        localStorage.setItem('token', this.token);
        this.authStatusListener.next(true);
        this.router.navigate(['/']);
      });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
    this.authStatusListener.next(false);
    this.router.navigate(['/login']);
  }

  isTokenExpired(): boolean {
    if (!this.token) {
      return true;
    }
    return this.jwtHelper.isTokenExpired(this.token);
  }
}
