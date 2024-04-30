import { Component, Input } from '@angular/core';

@Component({
  selector: 'sw-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() isRequired: boolean = false;
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() label: string = this.name;
}
