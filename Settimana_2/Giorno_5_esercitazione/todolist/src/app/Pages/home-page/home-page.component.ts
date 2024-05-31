import { Component, OnInit } from '@angular/core';
import { DatiService } from '../../Services/dati.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  todosWithUsers: any[] = [];

  constructor(private datiService: DatiService) { }

  ngOnInit(): void {
    this.todosWithUsers = this.datiService.getTodosWithUsers();
  }
}
