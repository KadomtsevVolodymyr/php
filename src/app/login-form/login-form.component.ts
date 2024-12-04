import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { usernameValidator } from '../../validators/username.validator';
import { ageValidator } from '../../validators/age.validator';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    username: new FormControl<string>('', [usernameValidator(), Validators.required]),
    bio: new FormGroup({
      firstName: new FormControl<string>('', [Validators.required]),
      lastName: new FormControl<string>('', [Validators.required]),
      age: new FormControl<number|null>(null, [Validators.required, Validators.min(1), ageValidator(120)]),
    }),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.minLength(5), Validators.required]),
  });

  updateLogin() {
    this.loginForm.patchValue({
      username: "bobross",
      bio: {
        firstName: "Bob",
        lastName: "Ross",
        age: 52
      },
      email: "bobross@mail.com",
      password: "12345789"
    })
  }
  login() {
    alert(JSON.stringify(this.loginForm.value, null, 2))
  }
}
