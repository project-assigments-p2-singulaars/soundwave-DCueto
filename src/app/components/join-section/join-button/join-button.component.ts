import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'sw-join-button',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './join-button.component.html',
  styleUrl: './join-button.component.scss'
})
export class JoinButtonComponent {
  @Input() text!: string;
  @Input() route!: string;
}
