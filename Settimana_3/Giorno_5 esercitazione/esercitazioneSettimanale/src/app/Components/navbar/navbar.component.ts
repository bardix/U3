import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { iUser } from '../../Interfaces/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: iUser | null = null;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.currentUser = this.authService.getCurrentUser();
      } else {
        this.currentUser = null;
      }
    });
  }

  get isAuthenticated() {
    return this.authService.getAuthStatusListener();
  }

  logout() {
    this.authService.logout();
  }
}
