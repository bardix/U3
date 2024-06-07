import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user-service.service';
import { iUser } from '../../Interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: iUser[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data: iUser[]) => {
      this.users = data;
    });
  }
}
