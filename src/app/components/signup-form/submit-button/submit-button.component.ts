import { Component, Input } from '@angular/core';

@Component({
  selector: 'sw-submit-button',
  standalone: true,
  imports: [],
  templateUrl: './submit-button.component.html',
  styleUrl: './submit-button.component.scss'
})
export class SubmitButtonComponent {
  @Input() text: string = 'Join Now';
}
