import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // create a property for the form
  registerForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', [Validators.required, Validators.pattern("[a-zA-Z]*")]],
      password: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]*")]]
    })
  }
  registerUser() {
    if (this.registerForm.valid) {
      alert(`${this.registerForm.value.email}, ${this.registerForm.value.firstname}, ${this.registerForm.value.password}`)
    }
    else {
      alert("Register Form Invalid")
    }
  }
}
