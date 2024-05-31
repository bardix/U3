import { Component, OnInit } from '@angular/core';
import { DatiService } from '../../Services/dati.service';
import { TodoServService } from '../../Services/todo-serv.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersWithTodos: any[] = []; // Array per memorizzare gli utenti con i loro todo

  constructor(private datiService: DatiService, private todoService: TodoServService) { }

  ngOnInit(): void {
    this.usersWithTodos = this.datiService.getTodosGroupedByUser(); // Ottiene i todo raggruppati per utente
  }

  toggleCompletion(todo: any): void {
    todo.completed = !todo.completed; // Inverte lo stato di completamento del todo
    this.todoService.updateTodoStatus(todo.id, todo.completed); // Aggiorna lo stato del todo nel servizio
    this.usersWithTodos = this.datiService.getTodosGroupedByUser(); // Aggiorna la lista dei todo raggruppati per utente
  }
}

