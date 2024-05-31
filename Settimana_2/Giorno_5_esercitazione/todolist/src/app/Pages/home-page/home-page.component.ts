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
  filteredTodos: any[] = [];
  searchQuery: string = '';

  constructor(private datiService: DatiService, private todoService: TodoServService) { }

  ngOnInit(): void {
    this.todosWithUsers = this.datiService.getTodosWithUsers();
    this.filteredTodos = this.todosWithUsers;
  }

  toggleCompletion(todo: any): void {
    todo.completed = !todo.completed;
    this.todoService.updateTodoStatus(todo.id, todo.completed);
    this.filteredTodos = this.datiService.getTodosWithUsers(); // Aggiorna la lista
    this.filterTodos(); // Applica il filtro dopo l'aggiornamento
  }

  filterTodos(): void {
    if (this.searchQuery) {
      this.filteredTodos = this.todosWithUsers.filter(todo =>
        todo.userName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredTodos = this.todosWithUsers;
    }
  }
}

