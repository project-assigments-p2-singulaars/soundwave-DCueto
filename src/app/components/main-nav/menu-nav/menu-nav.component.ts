import { Component } from '@angular/core';
import { MenuNavItemComponent } from '../menu-nav-item/menu-nav-item.component';

@Component({
  selector: 'sw-menu-nav',
  standalone: true,
  imports: [MenuNavItemComponent],
  templateUrl: './menu-nav.component.html',
  styleUrl: './menu-nav.component.scss'
})
export class MenuNavComponent {
  items = [
    { link: '/discover', text: 'Discover' },
    { link: '/join', text: 'Join' }
  ];
}
