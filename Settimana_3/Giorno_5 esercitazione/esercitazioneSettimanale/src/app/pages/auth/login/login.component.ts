import { Component } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
login() {
throw new Error('Method not implemented.');
}
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.email, this.password);
  }
}
