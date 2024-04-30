import { Component } from '@angular/core';
import { FooterMenuItemComponent } from '../footer-menu-item/footer-menu-item.component';

@Component({
  selector: 'sw-footer-menu',
  standalone: true,
  imports: [FooterMenuItemComponent],
  templateUrl: './footer-menu.component.html',
  styleUrl: './footer-menu.component.scss'
})
export class FooterMenuComponent {
  menuItems = [
    { itemText: 'About Us', itemLink: '' },
    { itemText: 'Contact', itemLink: '' }
  ]
}
