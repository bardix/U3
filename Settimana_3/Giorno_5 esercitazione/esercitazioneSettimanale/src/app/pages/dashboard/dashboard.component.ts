import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../../Interfaces/film'; // Importa l'interfaccia Film

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user = { name: 'User', favorites: [] as Film[] }; // Usa l'interfaccia Film

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const userId = 'id_dell_utente_loggato'; // Sostituisci con l'ID reale dell'utente
    this.http.get<any[]>(`http://localhost:3000/favorites?userId=${userId}`)
      .subscribe((data: Film[]) => { // Usa l'interfaccia Film
        this.user.favorites = data;
      });
  }
}
