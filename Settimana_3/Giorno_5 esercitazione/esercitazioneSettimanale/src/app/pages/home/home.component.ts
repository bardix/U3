import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../../Interfaces/film';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  films: Film[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Film[]>('http://localhost:3000/film')
      .subscribe(data => {
        this.films = data;
      });
  }
}
