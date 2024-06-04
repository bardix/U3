import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confermaPassword: ['', Validators.required],
      genere: ['', Validators.required],
      immagineProfilo: [null, Validators.required],
      biografia: ['', Validators.required],
      username: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.get('password');
    const confermaPassword = control.get('confermaPassword');
    return password && confermaPassword && password.value !== confermaPassword.value ? { mismatch: true } : null;
  };

  ngOnInit() {

  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    }
  }
}
