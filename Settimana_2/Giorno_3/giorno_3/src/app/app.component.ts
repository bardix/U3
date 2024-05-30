import { Component } from '@angular/core';
import { NgbToastService } from './Services/ngb-toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public toastService: NgbToastService) {
    this.toastService.toasts = this.toastService.toasts ?? [];
  }
}
