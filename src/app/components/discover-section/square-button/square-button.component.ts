import { Component, Input } from '@angular/core';

@Component({
  selector: 'sw-square-button',
  standalone: true,
  imports: [],
  templateUrl: './square-button.component.html',
  styleUrl: './square-button.component.scss'
})
export class SquareButtonComponent {
  @Input() icon!: string;
  @Input() text!: string;
}
