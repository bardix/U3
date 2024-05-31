import { Component, OnInit } from '@angular/core';
import { DatiService } from '../../Services/dati.service';

@Component({
  selector: 'app-to-do-completed',
  templateUrl: './to-do-completed.component.html',
  styleUrls: ['./to-do-completed.component.scss']
})
export class ToDoCompletedComponent implements OnInit {
  completedTodos: any[] = []; // Array per memorizzare i todo completati

  constructor(private datiService: DatiService) { }

  ngOnInit(): void {
    // Ottiene i todo completati
    this.completedTodos = this.datiService.getCompletedTodos();
  }
}
