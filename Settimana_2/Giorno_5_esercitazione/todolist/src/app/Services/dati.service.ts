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

  // Ottiene i todo con i dettagli degli utenti
  getTodosWithUsers() {
    const todos = this.todoService.todos; // Ottiene tutti i todo
    const users = this.userService.users; // Ottiene tutti gli utenti

    return todos.map(todo => {
      const user = users.find(user => user.id === todo.userId); // Trova l'utente corrispondente al todo
      return {
        ...todo,
        userName: user ? `${user.firstName} ${user.lastName}` : 'Unknown', // Aggiunge il nome dell'utente al todo
        userImage: user ? user.image : 'https://robohash.org/unknown' // Aggiunge l'immagine dell'utente al todo
      };
    });
  }

  // Filtra i todo completati
  getCompletedTodos() {
    return this.getTodosWithUsers().filter(todo => todo.completed);
  }

  // Raggruppa i todo per utente
  getTodosGroupedByUser() {
    const todos = this.getTodosWithUsers(); // Ottiene tutti i todo con i dettagli degli utenti
    const groupedTodos = todos.reduce((acc: { [key: number]: any }, todo) => {
      if (!acc[todo.userId]) {
        acc[todo.userId] = {
          userName: todo.userName,
          userImage: todo.userImage,
          todos: []
        };
      }
      acc[todo.userId].todos.push(todo); // Raggruppa i todo per utente
      return acc;
    }, {});
    return Object.values(groupedTodos); // Ritorna i todo raggruppati per utente
  }
}
