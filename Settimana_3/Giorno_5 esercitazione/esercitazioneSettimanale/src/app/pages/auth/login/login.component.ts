import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../Services/user-service.service';
import { iUser } from '../../../Interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}

  login() {
    this.onLogin(this.email, this.password);
  }

  onLogin(email: string, password: string) {
    this.http.post<{ token: string, user: iUser }>('http://localhost:3000/login', { email, password })
      .subscribe({
        next: response => {
          console.log('Response from server:', response);
          if (response.token && response.user) {
            this.userService.setUser(response.user);
            localStorage.setItem('token', response.token);
            this.router.navigate(['/dashboard']);
          } else {
            console.error('Token or user is missing in the response');
            alert('Login failed: Invalid response from server');
          }
        },
        error: error => {
          console.error('Login failed', error);
          alert('Login failed: ' + error.error.message);
        }
      });
  }
}

