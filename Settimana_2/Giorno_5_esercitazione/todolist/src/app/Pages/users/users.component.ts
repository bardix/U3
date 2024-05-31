import { Component, OnInit } from '@angular/core';
import { DatiService } from '../../Services/dati.service';
import { TodoServService } from '../../Services/todo-serv.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersWithTodos: any[] = [];

  constructor(private datiService: DatiService, private todoService: TodoServService) { }

  ngOnInit(): void {
    this.usersWithTodos = this.datiService.getTodosGroupedByUser();
  }

  toggleCompletion(todo: any): void {
    todo.completed = !todo.completed;
    this.todoService.updateTodoStatus(todo.id, todo.completed);
    this.usersWithTodos = this.datiService.getTodosGroupedByUser(); // Aggiorna la lista
  }
}

