import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'sw-menu-nav-item',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './menu-nav-item.component.html',
  styleUrl: './menu-nav-item.component.scss'
})
export class MenuNavItemComponent {
  @Input() link!: string;
  @Input() text!: string;
}
