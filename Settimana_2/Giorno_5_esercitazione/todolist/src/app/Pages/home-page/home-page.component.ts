import { Component, OnInit } from '@angular/core';
import { DatiService } from '../../Services/dati.service';
import { TodoServService } from '../../Services/todo-serv.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  todosWithUsers: any[] = [];

  constructor(private datiService: DatiService, private todoService: TodoServService) { }

  ngOnInit(): void {
    this.todosWithUsers = this.datiService.getTodosWithUsers();
  }

  toggleCompletion(todo: any): void {
    todo.completed = !todo.completed;
    this.todoService.updateTodoStatus(todo.id, todo.completed);
    this.todosWithUsers = this.datiService.getTodosWithUsers(); // Aggiorna la lista
  }
}
