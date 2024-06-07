import { Component, OnInit } from '@angular/core';
import { iUser } from '../../Interfaces/user';
import { UserService } from '../../Services/user-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: iUser | null = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.user$.subscribe(user => {
      this.user = user;
    });
  }
}
