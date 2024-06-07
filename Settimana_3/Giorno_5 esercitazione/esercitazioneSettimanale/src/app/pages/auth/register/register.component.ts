import { Component } from '@angular/core';
import { Authdata } from '../../../Interfaces/authdata';
import { AuthService } from '../../../Services/auth.service';
import { iUser } from '../../../Interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: iUser = { id: 0, name: '', email: '', password: '', favorites: [] };

  constructor(private authService: AuthService) {}

  onRegister(): void {
    this.authService.register(this.user);
  }
}
