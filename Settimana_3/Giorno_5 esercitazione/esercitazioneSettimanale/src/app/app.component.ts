import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authService: AuthService) {}

  get isAuthenticated() {
    return this.authService.getAuthStatusListener();
  }

  logout() {
    this.authService.logout();
  }
}
