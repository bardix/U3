import { Injectable } from '@angular/core'
import { TodoServService } from './todo-serv.service';
import { UserServService } from './user-serv.service';

@Injectable({
  providedIn: 'root'
})
export class DatiService {

  constructor(
    private todoService: TodoServService,
    private userService: UserServService
  ) { }

  getTodosWithUsers() {
    const todos = this.todoService.todos;
    const users = this.userService.users;

    return todos.map(todo => {
      const user = users.find(user => user.id === todo.userId);
      return {
        ...todo,
        userName: user ? `${user.firstName} ${user.lastName}` : 'Unknown',
        userImage: user ? user.image : 'https://robohash.org/unknown'
      };
    });
  }

  getCompletedTodos() {
    return this.getTodosWithUsers().filter(todo => todo.completed);
  }

  getTodosGroupedByUser() {
    const todos = this.getTodosWithUsers();
    const groupedTodos = todos.reduce((acc: { [key: number]: any }, todo) => {
      if (!acc[todo.userId]) {
        acc[todo.userId] = {
          userName: todo.userName,
          userImage: todo.userImage,
          todos: []
        };
      }
      acc[todo.userId].todos.push(todo);
      return acc;
    }, {});
    return Object.values(groupedTodos);
  }
}
