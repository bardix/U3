import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public authService: AuthService) {}

  get isAuthenticated() {
    return this.authService.getAuthStatusListener();
  }

  logout() {
    this.authService.logout();
  }
}
