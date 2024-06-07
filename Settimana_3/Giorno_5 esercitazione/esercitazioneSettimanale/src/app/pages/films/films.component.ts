import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../../Interfaces/film'; // Importa l'interfaccia Film

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  films: Film[] = []; // Usa l'interfaccia Film
  selectedFilm: Film | null = null; // Usa l'interfaccia Film

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/movies-popular')
      .subscribe(data => {
        this.films = data;
      });
  }

  getFilmDetails(id: string) {
    this.http.get<any>(`http://localhost:3000/movies-popular/${id}`)
      .subscribe(data => {
        this.selectedFilm = data;
      });
  }

  addToFavorites(film: any) {
    // Logica per aggiungere il film ai preferiti
  }
}
