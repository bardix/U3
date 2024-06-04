import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
loginForm: any;
  onSubmit(form: any) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
