import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'sw-nav-logo',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './nav-logo.component.html',
  styleUrl: './nav-logo.component.scss'
})
export class NavLogoComponent {
  logoPath = './../assets/images/logo.png';
  logoText = 'Soundwave';
  @Input() link!: string;
  @Input() text!: string;
}
