import { Component } from '@angular/core';
import { MenuNavComponent } from '../menu-nav/menu-nav.component';
import { NavLogoComponent } from '../nav-logo/nav-logo.component';

@Component({
  selector: 'sw-main-nav',
  standalone: true,
  imports: [MenuNavComponent, NavLogoComponent],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss'
})
export class MainNavComponent {

}
