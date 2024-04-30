import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { SubmitButtonComponent } from '../submit-button/submit-button.component';

@Component({
  selector: 'sw-signup-form',
  standalone: true,
  imports: [InputComponent, SubmitButtonComponent],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})
export class SignupFormComponent {
  inputFields = [
    { type: 'text', name: 'name', id: 'name', label: 'Name', isRequired: true },
    { type: 'email', name: 'email', id: 'email', label: 'Email', isRequired: true },
    { type: 'password', name: 'password', id: 'password', label: 'Password', isRequired: true }
  ]
}
