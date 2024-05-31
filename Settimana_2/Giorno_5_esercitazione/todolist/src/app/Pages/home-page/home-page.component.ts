import { Component, OnInit } from '@angular/core';
import { DatiService } from '../../Services/dati.service';
import { TodoServService } from '../../Services/todo-serv.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  todosWithUsers: any[] = []; // Array per memorizzare i todo con i dettagli degli utenti
  filteredTodos: any[] = []; // Array per memorizzare i todo filtrati
  searchQuery: string = ''; // Stringa per memorizzare la query di ricerca

  constructor(private datiService: DatiService, private todoService: TodoServService) { }

  ngOnInit(): void {
    this.todosWithUsers = this.datiService.getTodosWithUsers(); // Ottiene i todo con i dettagli degli utenti
    this.filteredTodos = this.todosWithUsers; // Inizializza i todo filtrati con tutti i todo
  }

  toggleCompletion(todo: any): void {
    todo.completed = !todo.completed; // Inverte lo stato di completamento del todo
    this.todoService.updateTodoStatus(todo.id, todo.completed); // Aggiorna lo stato del todo nel servizio
    this.filteredTodos = this.datiService.getTodosWithUsers(); // Aggiorna la lista dei todo
    this.filterTodos(); // Applica il filtro dopo l'aggiornamento
  }

  filterTodos(): void {
    if (this.searchQuery) {
      this.filteredTodos = this.todosWithUsers.filter(todo =>
        todo.userName.toLowerCase().includes(this.searchQuery.toLowerCase()) // Filtra i todo in base alla query di ricerca
      );
    } else {
      this.filteredTodos = this.todosWithUsers; // Se la query è vuota, mostra tutti i todo
    }
  }
}

