import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { iUser } from '../Interfaces/user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = localStorage.getItem('token');
  private authStatusListener = new BehaviorSubject<boolean>(false);
  private jwtHelper = new JwtHelperService();
  private currentUser: iUser | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  getToken(): string | null {
    return this.token;
  }

  getAuthStatusListener(): Observable<any> {
    return this.authStatusListener.asObservable();
  }

  getCurrentUser(): iUser | null {
    return this.currentUser;
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<{ token: string, user: iUser }>('http://localhost:3000/login', { email, password })
      .pipe(
        tap((response: any) => {
          this.token = response.token;
          this.currentUser = response.user;
          localStorage.setItem('token', this.token ?? '');
          this.authStatusListener.next(true);
          this.router.navigate(['/']);
        })
      );
  }

  register(user: iUser): void {
    this.http.post<{ token: string, user: iUser }>('http://localhost:3000/register', user)
      .subscribe(response => {
        this.token = response.token;
        this.currentUser = response.user;
        localStorage.setItem('token', this.token);
        this.authStatusListener.next(true);
        this.router.navigate(['/']);
      });
  }

  logout(): void {
    this.token = null;
    this.currentUser = null;

    localStorage.removeItem('token');
    this.authStatusListener.next(false);
    this.router.navigate(['/login']);
  }

  isTokenExpired(): boolean {
    if (!this.token) {
      return true;
    }
    return this.jwtHelper.isTokenExpired(this.token ?? '');
  }
}
